#!/usr/bin/env node
// Local stdio MCP server. Read-only; does not send messages or create bookings.
import { createInterface } from 'node:readline';
import { readFileSync } from 'node:fs';
const catalog = JSON.parse(readFileSync(new URL('../public/vocal-services.json', import.meta.url),'utf8'));
const tools=[
 {name:'get_vocal_services',description:'Get Ralskies remote vocal offerings, specialties, booking requirements and official contact details.',inputSchema:{type:'object',properties:{},additionalProperties:false}},
 {name:'get_vocal_samples',description:'Get official links to Ralskies vocal samples and original music. Some are covers with rights restrictions.',inputSchema:{type:'object',properties:{},additionalProperties:false}},
 {name:'prepare_vocal_booking_inquiry',description:'Draft an inquiry for a proposed remote vocal project. Does not send email or reserve time.',inputSchema:{type:'object',properties:{service:{type:'string',description:'Requested vocal service'},project:{type:'string',description:'Project or song description'},budget:{type:'string'},deadline:{type:'string'}},required:['service','project'],additionalProperties:false}}
];
function response(id,result){return {jsonrpc:'2.0',id,result}}
function toolText(data){return {content:[{type:'text',text:typeof data==='string'?data:JSON.stringify(data,null,2)}]}}
function safe(value){return String(value??'').slice(0,1500).trim()}
function handle(req){
 if(req.method==='initialize')return response(req.id,{protocolVersion:'2025-06-18',capabilities:{tools:{}},serverInfo:{name:'ralskies-vocal-booking',version:'0.1.0'}});
 if(req.method==='ping')return response(req.id,{});
 if(req.method==='tools/list')return response(req.id,{tools});
 if(req.method==='tools/call'){
  const name=req.params?.name;const a=req.params?.arguments??{};
  if(name==='get_vocal_services')return response(req.id,toolText({artist:catalog.artist,location:catalog.location,availability:catalog.availability,pricing:catalog.pricing,services:catalog.services,contact:catalog.contact}));
  if(name==='get_vocal_samples')return response(req.id,toolText({artist:catalog.artist,samples:catalog.samples,note:'Confirm licensing and rights for cover recordings. No audio files are stored or transmitted.'}));
  if(name==='prepare_vocal_booking_inquiry'){
    if(!safe(a.service)||!safe(a.project))return {jsonrpc:'2.0',id:req.id,error:{code:-32602,message:'Service and project are required.'}};
    return response(req.id,toolText({status:'draft_only',to:catalog.email,subject:'Ralskies vocal booking inquiry: '+safe(a.service),body:'Hello Ralskies,\\n\\nI am interested in '+safe(a.service)+'.\\nProject: '+safe(a.project)+'\\nBudget: '+(safe(a.budget)||'To discuss')+'\\nDeadline: '+(safe(a.deadline)||'To discuss')+'\\n\\nPlease let me know about your availability, estimate, recording deliverables and usage terms.',notice:'This is an unsent draft. Confirm all commercial and copyright terms before agreeing to a job.'}));
  }
  return {jsonrpc:'2.0',id:req.id,error:{code:-32601,message:'Unknown tool'}};
 }
 if(req.method==='notifications/initialized')return null;
 if(req.id===undefined)return null;
 return {jsonrpc:'2.0',id:req.id,error:{code:-32601,message:'Method not found'}};
}
const io=createInterface({input:process.stdin,crlfDelay:Infinity});
io.on('line',line=>{try{const r=handle(JSON.parse(line));if(r!==null)process.stdout.write(JSON.stringify(r)+'\n')}catch(e){process.stdout.write(JSON.stringify({jsonrpc:'2.0',id:null,error:{code:-32700,message:'Invalid JSON or request'}})+'\n')}});
