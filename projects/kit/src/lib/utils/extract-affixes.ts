import {escapeRegExp} from './escape-reg-exp';

export function extractAffixes(
    value: string,
    {prefix, postfix}: {prefix: string; postfix: string},
): {
    extractedPrefix: string;
    extractedPostfix: string;
    cleanValue: string;
} {
    const prefixSearchResults = new RegExp(`^${escapeRegExp(prefix)}`).exec(value);
    const postfixSearchResults = new RegExp(`${escapeRegExp(postfix)}$`).exec(value);

    const extractedPrefix = prefixSearchResults ? prefixSearchResults[0] : '';
    const extractedPostfix = postfixSearchResults ? postfixSearchResults[0] : '';

    if (extractedPrefix || extractedPostfix) {
        return {
            extractedPrefix,
            extractedPostfix,
            cleanValue: value.slice(
                extractedPrefix.length,
                extractedPostfix.length ? -extractedPostfix.length : Infinity,
            ),
        };
    }

    return {extractedPrefix, extractedPostfix, cleanValue: value};
}
