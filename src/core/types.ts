// src/core/types.ts

// Interface for the execution context during skill execution
export interface ExecutionContext {
    executeSkillId: string;
    userId: string;
    contextData: Record<string, any>;
}

// Result of executing a skill
export interface SkillResult {
    success: boolean;
    message?: string;
    data?: any;
}

// Interface for a Skill
export interface SkillInterface {
    id: string;
    name: string;
    execute(context: ExecutionContext): SkillResult;
}

// Configuration for data sources
export interface DataSourceConfig {
    type: string;
    url: string;
    options?: Record<string, any>;
}

// User information
export interface User {
    id: string;
    name: string;
    email: string;
}

// Brand information
export interface Brand {
    id: string;
    name: string;
    logoUrl?: string;
}
