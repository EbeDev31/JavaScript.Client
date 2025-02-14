/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Command } from '../Command';

describe("when constructing derivative with default values", () => {
    let defaultValues = {
        someInt: 42,
        someString: "Fourty two"
    }

    class MyCommand extends Command {
        constructor() {
            super(defaultValues);
        }
    }

    let command: Command = new MyCommand()

    it("should set the integer default value", () => command.someInt.should.equal(defaultValues.someInt));
    it("should set the string default value", () => command.someString.should.equal(defaultValues.someString));
});