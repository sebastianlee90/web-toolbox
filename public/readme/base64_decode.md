# Base64 Decode Tool Overview

The Base64 Decode Tool is designed to convert Base64-encoded text back into its original, human-readable form. This is especially helpful for developers and analysts who encounter encoded data in web APIs, data exchanges, emails, and other digital communications.

## Common Use Cases

- Inspecting the contents of Base64-encoded API payloads
- Reading encoded information from emails or chat applications
- Decoding data that has been transferred in Base64 format
- Viewing the original content of files or images represented as Base64 strings

## Getting Started

1. Paste your Base64-encoded string into the input field labeled "Base64 Conversion Target."
2. The decoded output will appear instantly as you type or paste.
3. Toggle the "Decode by Line" option if you have multiple lines of Base64 data.
4. Use the copy button to quickly copy the decoded result.

## Decoding Options

### Decode by Line

Enable this option to process each line of your input as a separate Base64 string. This is useful for batch operations, such as:

- Decoding multiple entries from log files
- Handling CSV files with several Base64-encoded fields
- Analyzing several encoded messages at once

When disabled, the tool treats the entire input as a single Base64 string, including any line breaks.

## Examples

### Example 1: Decoding a JSON API Response

**Input:**

```
eyJuYW1lIjoiSm9obiBEb2UiLCJlbWFpbCI6ImpvaG5AZXhhbXBsZS5jb20iLCJyb2xlIjoiYWRtaW4ifQ==
```

**Decoded Output:**

```
{ "name": "John Doe", "email": "john@example.com", "role": "admin" }
```

### Example 2: Decoding Multiple Lines

With "Decode by Line" enabled, input:

```
SGVsbG8gV29ybGQh
V2ViIFRvb2xCb3g=
QmFzZTY0IGRlY29kZXI=
```

**Decoded Output:**

```
Hello World!
Web ToolBox
Base64 decoder
```

## How Base64 Works

Base64 encoding transforms binary data into a text format using only ASCII characters. This makes it possible to transmit binary files over systems that only support text, such as email or JSON. Typical applications include:

- Email attachments (MIME)
- Data URIs in web development
- Embedding binary data in JSON
- Encoding tokens and certificates (e.g., JWT)

This tool uses standard decoding algorithms to accurately restore your data to its original state.
