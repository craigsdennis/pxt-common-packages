// Auto-generated. Do not edit.
declare namespace storage {

    /** Append string data to a new or existing file. */
    //% shim=storage::append
    function append(filename: string, data: string): void;

    /** Append a buffer to a new or existing file. */
    //% shim=storage::appendBuffer
    function appendBuffer(filename: string, data: Buffer): void;

    /** Overwrite file with string data. */
    //% shim=storage::overwrite
    function overwrite(filename: string, data: string): void;

    /** Overwrite file with a buffer. */
    //% shim=storage::overwriteWithBuffer
    function overwriteWithBuffer(filename: string, data: Buffer): void;

    /** Return true if the file already exists. */
    //% shim=storage::exists
    function exists(filename: string): boolean;

    /** Delete a file, or do nothing if it doesn't exist. */
    //% shim=storage::remove
    function remove(filename: string): void;

    /** Return the size of the file, or -1 if it doesn't exists. */
    //% shim=storage::size
    function size(filename: string): int32;

    /** Read contents of file as a string. */
    //% shim=storage::read
    function read(filename: string): string;

    /** Read contents of file as a buffer. */
    //% shim=storage::readAsBuffer
    function readAsBuffer(filename: string): Buffer;
}

// Auto-generated. Do not edit. Really.
