# Ralskies Vocal Booking MCP (local prototype)

This is an optional **local, read-only** Model Context Protocol (MCP) server. It exposes the artist's official services and sample links and drafts a booking inquiry. **It cannot send emails, take payment, accept contracts, reserve availability, or expose private data.**

## Run
Requires Node.js 20+.

```sh
node mcp/server.mjs
```

For desktop MCP clients supporting stdio servers, configure the executable `node` and command arguments pointing to the absolute path of `mcp/server.mjs`. It publishes three tools:
- `get_vocal_services`
- `get_vocal_samples`
- `prepare_vocal_booking_inquiry`

The catalog lives at `public/vocal-services.json` and can also be read over HTTPS at `/vocal-services.json` after website deployment.

**This is not a publicly hosted remote MCP endpoint.** To enable remote tool invocation, a separate authenticated HTTP MCP service and hosting/security review are needed. Installing a local server doesn't make the artist globally discoverable or searchable automatically.

## Maintenance
Update the publicly stated services and sample links in `public/vocal-services.json`. Avoid publishing phone numbers, private account details or unreleased stems. All rates and availability remain subject to confirmation.

To smoke-test, send one JSON-RPC line:
```sh
printf '%s\n' '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | node mcp/server.mjs
```
