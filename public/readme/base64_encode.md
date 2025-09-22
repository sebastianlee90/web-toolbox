# Base64 Encode Tool Overview

The Base64 Encode Tool allows you to convert text or binary data into Base64-encoded strings. This encoding is widely used for safely transmitting data over media that are designed to handle textual data, such as JSON, XML, or URLs.

## Typical Use Cases

- Preparing data for inclusion in web APIs or HTTP requests
- Encoding files or images for embedding in HTML or CSS
- Safely transmitting binary data in email or chat applications
- Generating Base64 strings for authentication tokens or certificates

## How to Use

1. Enter the text or data you want to encode in the input field labeled "Input data to be converted to Base64."
2. The encoded Base64 output will appear automatically as you type or paste.
3. Use the "Encode by Line" option if you want to encode each line separately (useful for batch processing).
4. Enable "Convert to URL Safe Format" if you need a Base64 string that is safe for use in URLs (replaces `+` with `-`, `/` with `_`, and removes padding).
5. Use the copy button to quickly copy the encoded result.

## Encoding Options

### Encode by Line

When this option is enabled, each line of your input is encoded as a separate Base64 string. This is helpful for:

- Processing lists of values or log entries
- Encoding multiple fields from a CSV or text file
- Handling batch operations

When disabled, the entire input is treated as a single block of text.

### URL Safe Format

Enable this option to produce a Base64 string that is safe for use in URLs and filenames. The tool will:

- Replace `+` with `-`
- Replace `/` with `_`
- Remove any trailing `=` padding

This format is commonly used in web tokens (JWT), URLs, and file names.

## Examples

### Example 1: Encoding a Simple String

**Input:**

```
Hello World!
```

**Encoded Output:**

```
SGVsbG8gV29ybGQh
```

### Example 2: URL Safe Encoding

**Input:**

```
foo/bar+baz
```

**Encoded Output (URL Safe):**

```
Zm9vL2Jhci1iYXo
```

### Example 3: Encoding Multiple Lines

With "Encode by Line" enabled:

**Input:**

```
apple
banana
cherry
```

**Encoded Output:**

```
YXBwbGU=
YmFuYW5h
Y2hlcnJ5
```

## What is Base64?

Base64 is a method for encoding binary data as ASCII text. It is commonly used to transmit data over protocols that are not binary-safe, such as email or HTTP. The encoding process takes three bytes of data and represents them as four printable characters.

This tool uses standard encoding algorithms to ensure your data is accurately converted
