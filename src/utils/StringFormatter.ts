import { replace, startCase } from "lodash";

export const StringFormatter = {
    formatToReadableLabel: (stringIn: string) => (startCase(replace(stringIn, "-", " ")))
}