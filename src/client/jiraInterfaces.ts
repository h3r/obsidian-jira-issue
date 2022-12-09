import { EAuthenticationTypes } from "src/settings"

export interface IJiraIssue {
    id: string
    key: string
    fields: {
        assignee: IJiraUser
        created: string
        creator: IJiraUser
        description: string
        duedate: string
        resolution: {
            name: string
            description: string
        }
        resolutiondate: string
        issuetype: {
            iconUrl: string
            name: string
        }
        priority: {
            iconUrl: string
            name: string
        }
        reporter: IJiraUser
        status: {
            statusCategory: {
                colorName: string
            }
            name: string
            description: string
        }
        summary: string
        updated: string
        environment: string
        project: {
            key: string
            name: string
        }
        labels: string[]
        fixVersions: [{
            name: string
            description: string
            released: boolean
        }]
        components: [{
            name: string
        }]
        aggregatetimeestimate: number
        aggregatetimeoriginalestimate: number
        aggregatetimespent: number
        timeestimate: number
        timeoriginalestimate: number
        timespent: number
        issueLinks: [{
            type: {
                name: string
            }
            inwardIssue: {
                key: string
                fields: {
                    summary: string
                }
            }
        }]
        aggregateprogress: {
            percent: number
        }
        progress: {
            percent: number
        }
        lastViewed: string
        [k: string]: any
    }
    account: IJiraIssueAccountSettings
}

export interface IJiraUser {
    active: boolean
    displayName: string
    self: string
    avatarUrls: {
        '16x16': string
        '24x24': string
        '32x32': string
        '48x48': string
    }
}

export interface IJiraSearchResults {
    issues: IJiraIssue[]
    maxResults: number
    startAt: number
    total: number
    account: IJiraIssueAccountSettings
}

export interface IJiraStatus {
    statusCategory: {
        colorName: string
    }
}

export interface IJiraField {
    custom: boolean
    id: string
    name: string
    schema: IJiraFieldSchema
}

export interface IJiraFieldSchema {
    customId: number
    type: string
    items?: string
}

export interface IJiraAutocompleteDataField {
    value: string
    displayName: string
    auto: string
    orderable: string
    searchable: string
    cfid: string
    operators: [string]
    types: [string]
}

export interface IJiraAutocompleteData {
    visibleFieldNames: IJiraAutocompleteDataField[]
    visibleFunctionNames: [{
        value: string
        displayName: string
        isList?: string
        types: [string]
    }]
    jqlReservedWords: [string]
}

export interface IJiraAutocompleteField {
    results: [{
        value: string
        displayName: string
    }]
}

export interface IJiraIssueAccountSettings {
    alias: string
    host: string
    authenticationType: EAuthenticationTypes
    username?: string
    password?: string
    bareToken?: string
    priority: number
    color: string
    cache: {
        statusColor: Record<string, string>
        customFieldsIdToName: Record<string, string>
        customFieldsNameToId: Record<string, string>
        customFieldsType: Record<string, IJiraFieldSchema>
        jqlAutocomplete: {
            fields: IJiraAutocompleteDataField[]
            functions: {
                [key: string]: [string]
            }
        }
    }
}

export interface IJiraDevStatus {
    errors: []
    configErrors: []
    summary: {
        pullrequest: {
            overall: {
                count: number
                lastUpdated: string
                stateCount: number
                state: string
                details: {
                    openCount: number
                    mergedCount: number
                    declinedCount: number
                }
                open: boolean
            }
        }
        build: {
            overall: {
                count: number
            }
        }
        review: {
            overall: {
                count: number
            }
        }
        repository: {
            overall: {
                count: number
            }
        }
        branch: {
            overall: {
                count: number
            }
        }
    }
}

export function createProxy<T extends Object>(obj: T): T {
    const proxy = new Proxy<T>(obj, {
        get: (target: T, property: string, receiver: any) => {
            if (property in target) {
                const value = Reflect.get(target, property, receiver)
                if (value !== undefined && value !== null) {
                    if (value instanceof Object && property !== 'prototype') {
                        return createProxy(value)
                    } else {
                        return value
                    }
                }
            }
            return ''
        },
    })
    return proxy
}