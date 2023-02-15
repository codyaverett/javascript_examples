
/**
 *  custom error type for invalid render type
 * */
export class InvalidRenderTypeError extends Error {
    constructor(renderType: string) {
        super(`Invalid render type: ${renderType}`);
    }
}
