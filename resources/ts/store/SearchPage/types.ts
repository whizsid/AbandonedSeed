export const SEARCH_PAGE_KEYWORD_CHANGE = "SEARCH_PAGE_KEYWORD_CHANGE";
export const SEARCH_PAGE_CHANGE_OPTION = "SEARCH_PAGE_CHANGE_OPTION";
export const SEARCH_PAGE_OPTION_KEYWORD_CHANGE =
    "SEARCH_PAGE_OPTION_KEYWORD_CHANGE";
export const SEARCH_PAGE_LOADED_OPTIONS = "SEARCH_PAGE_LOADED_OPTIONS";
export const SEARCH_PAGE_LOADED_RESULTS = "SEARCH_PAGE_LOADED_RESULTS";

export interface Option {
    id: string | number;
    label: string;
}

export interface UserCompleteInfo {
    name: string;
    code: string;
    class: string;
    id: string | number;
    avatar: string;
}

export interface SearchPageState {
    searchKeyword: string;
    selectedOptions: {
        [x: string]: (string | number)[];
    };
    loadedOptions: {
        [x: string]: Option[];
    };
    keywords: {
        [x: string]: string;
    };
    results: UserCompleteInfo[];
    resultsCount: number | string;
}

export interface ChangeKeyword {
    type: typeof SEARCH_PAGE_KEYWORD_CHANGE;
    keyword: string;
}

export interface ChangeOption {
    type: typeof SEARCH_PAGE_CHANGE_OPTION;
    id: string | number;
    optionId: string;
}

export interface OptionKeywordChange {
    type: typeof SEARCH_PAGE_OPTION_KEYWORD_CHANGE;
    keyword: string;
    optionId: string;
}

export interface LoadedOptions {
    type: typeof SEARCH_PAGE_LOADED_OPTIONS;
    options: Option[];
    optionId: string;
}

export interface LoadedResults {
    type: typeof SEARCH_PAGE_LOADED_RESULTS;
    results: UserCompleteInfo[];
    resultsCount: number | string;
}

export type SearchPageActions =
    | ChangeKeyword
    | ChangeOption
    | OptionKeywordChange
    | LoadedOptions
    | LoadedResults;
