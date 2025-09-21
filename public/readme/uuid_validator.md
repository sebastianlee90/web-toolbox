# UUID Validator Tool

The UUID Validator Tool provides a fast and reliable way to check the validity of one or more UUIDs (Universally Unique Identifiers). Whether you’re working with user IDs, database keys, or distributed system identifiers, this tool helps you quickly verify format correctness and determine the UUID version.

## What Does This Tool Do?

- **Bulk Validation:** Paste multiple UUIDs (one per line) and validate them all at once.
- **Version Detection:** Instantly identifies the version (1, 3, 4, 5, etc.) of each valid UUID.
- **Clear Feedback:** See at a glance which UUIDs are valid or invalid, with color-coded badges for easy scanning.
- **Copy & Clear:** Easily copy your input or clear the field with a single click.

## How to Use

1. **Enter UUIDs:** Paste or type one or more UUIDs into the input area. Each UUID should be on its own line.
2. **Validate:** Click the "Validate" button to check all entries.
3. **Review Results:** The table below will show each UUID, its validity status, and its version (if valid).
4. **Copy or Clear:** Use the copy button to copy your input, or clear to reset the field.

## Example

**Input:**

```
f47ac10b-58cc-11cf-a9a6-08002b123456
550e8400-e29b-41d4-a716-446655440000
invalid-uuid-string
```

**Output Table:**

| UUID                                 | Valid   | Version |
| ------------------------------------ | ------- | ------- |
| f47ac10b-58cc-11cf-a9a6-08002b123456 | Valid   | 1       |
| 550e8400-e29b-41d4-a716-446655440000 | Valid   | 4       |
| invalid-uuid-string                  | Invalid |         |

## Why Validate UUIDs?

- **Data Integrity:** Ensure your identifiers conform to the UUID standard before using them in your applications or databases.
- **Debugging:** Quickly spot formatting errors or incorrect versions in large lists of UUIDs.
- **Interoperability:** Confirm that UUIDs from external sources are valid and compatible with your systems.

## Notes

- The tool supports all standard UUID versions.
- Invalid UUIDs are clearly marked, and their version field will be empty.
- Input is not case-sensitive; both uppercase and lowercase UUIDs are accepted.

---

This tool is designed to streamline UUID validation for developers, testers, and anyone who needs to work with unique identifiers in bulk or individually.
