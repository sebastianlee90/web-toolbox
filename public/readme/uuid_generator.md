# UUID Generator Tool

The UUID Generator Tool provides a flexible and user-friendly way to create Universally Unique Identifiers (UUIDs) of various versions. Whether you need random, time-based, or name-based UUIDs, this tool makes the process simple and efficient for developers, testers, and anyone working with unique identifiers.

## How to Use

1. **Select UUID Version:** Choose the desired UUID version from the dropdown.
2. **Set Quantity:** For random/time-based UUIDs, specify how many to generate.
3. **Name-Based UUIDs:** For versions 3 and 5, enter a namespace (must be a valid UUID) and a name.
4. **Options:** Toggle "Append" to add new UUIDs to the output, or "Uppercase" to display results in uppercase.
5. **Generate:** Click "Generate" to create your UUID(s).
6. **Copy or Clear:** Use the copy button to copy results, or clear to reset all fields.

## Example Use Cases

- Generating unique IDs for database records or distributed systems
- Creating deterministic UUIDs for consistent resource identification
- Producing multiple UUIDs for testing or batch operations
- Formatting UUIDs for use in systems that require uppercase

## UUID Versions Supported

### Version 1: Time-based UUID

Generates UUIDs using the current timestamp and the MAC address of the machine. This ensures uniqueness across time and space, making it suitable for distributed systems where time-based ordering is important.

### Version 3: Name-based UUID (MD5 hash)

Produces deterministic UUIDs by hashing a namespace UUID and a name using the MD5 algorithm. The same namespace and name will always yield the same UUID, which is useful for generating consistent identifiers for resources.

### Version 4: Random UUID

Generates UUIDs using random numbers. This version is widely used for its simplicity and strong uniqueness guarantees, as the probability of collisions is extremely low.

### Version 5: Name-based UUID (SHA-1 hash)

Similar to version 3, but uses the SHA-1 hashing algorithm instead of MD5. This provides a more secure and modern approach to deterministic UUID generation.

### Version 6: Ordered Time-based UUID

An extension of version 1, version 6 reorders the timestamp bits to allow for easier sorting and improved database indexing. This version is useful when you need both uniqueness and chronological ordering.

### Version 7: Unix Epoch Timestamp-based UUID

Uses the Unix epoch timestamp as the basis for UUID generation, making it ideal for systems that require time-based ordering and compatibility with modern timestamp formats.

## Benefits of UUID

### Global Uniqueness:

UUIDs are designed to be unique across all devices and systems, reducing the risk of identifier collisions even in distributed environments.

### Decentralized Generation:

UUIDs can be generated independently without the need for a central authority or coordination, making them ideal for scalable and distributed applications.

### Consistency:

Name-based UUIDs (versions 3 and 5) allow for deterministic generation, ensuring the same input always produces the same UUID.

### Security:

Random and name-based UUIDs are difficult to guess or predict, which can help obscure sensitive information in URLs or public APIs.

### Compatibility:

UUIDs are standardized and supported across many programming languages, databases, and systems.

## Notes

- For name-based UUIDs (v3 and v5), only one UUID is generated per operation, regardless of the quantity specified.
- The namespace for v3/v5 must be a valid UUID string.
- The tool validates input and provides feedback for missing or invalid fields.

---

This tool is designed to streamline UUID generation for a variety of development and testing scenarios, giving you full control over output format
