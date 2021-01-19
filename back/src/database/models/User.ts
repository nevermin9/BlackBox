
export default class User {
    firstName: string;
    lastName: string;
    email: string;
    type: string;
    readonly created_at: Date | null = null;
    protected passwordHash: string = '';

    constructor(f: string, l: string, e: string, t: string) {
        this.firstName = f;
        this.lastName = l;
        this.email = e;
        this.type = t;
    }
}