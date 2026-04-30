import { BrandMarketingSkill } from '../skills/brand-marketing';
import { IndustryInsightsSkill } from '../skills/industry-insights';
import { SalesAnalyticsSkill } from '../skills/sales-analytics';
import { SupplyChainSkill } from '../skills/supply-chain';
import { CustomerManagementSkill } from '../skills/customer-management';
import { OperationalEfficiencySkill } from '../skills/operational-efficiency';
import { MenuOptimizationSkill } from '../skills/menu-optimization';
import { ReputationManagementSkill } from '../skills/reputation-management';
import { SkillInterface, ExecutionContext, SkillResult } from './types';

/**
 * Agent核心引擎
 */
export class RestaurantBrandAgent {
  private skills: Map<string, SkillInterface> = new Map();

  constructor() {
    this.registerSkills();
  }

  private registerSkills(): void {
    const skills: SkillInterface[] = [
      new BrandMarketingSkill(),
      new IndustryInsightsSkill(),
      new SalesAnalyticsSkill(),
      new SupplyChainSkill(),
      new CustomerManagementSkill(),
      new OperationalEfficiencySkill(),
      new MenuOptimizationSkill(),
      new ReputationManagementSkill()
    ];

    skills.forEach(skill => {
      this.skills.set(skill.name, skill);
    });
  }

  /**
   * 初始化Agent
   */
  async initialize(): Promise<void> {
    console.log('🚀 初始化餐饮品牌AI Agent...');
    
    for (const [skillName, skill] of this.skills) {
      await skill.initialize();
    }
    
    console.log('✅ Agent初始化完成，已加载 ' + this.skills.size + ' 个Skills');
  }

  /**
   * 执行Skill
   */
  async executeSkill(
    skillName: string,
    context: ExecutionContext
  ): Promise<SkillResult> {
    const skill = this.skills.get(skillName);
    
    if (!skill) {
      return {
        success: false,
        error: `Skill '${skillName}' 不存在`,
        skillName,
        executionTime: 0
      };
    }

    return skill.execute(context);
  }

  /**
   * 执行多个Skills
   */
  async executeMultipleSkills(
    skillNames: string[],
    context: ExecutionContext
  ): Promise<Map<string, SkillResult>> {
    const results = new Map<string, SkillResult>();
    
    for (const skillName of skillNames) {
      const result = await this.executeSkill(skillName, context);
      results.set(skillName, result);
    }
    
    return results;
  }

  /**
   * 获取所有可用Skills
   */
  getAvailableSkills(): string[] {
    return Array.from(this.skills.keys());
  }

  /**
   * 关闭Agent
   */
  async shutdown(): Promise<void> {
    console.log('🛑 关闭Agent...');
    
    for (const [, skill] of this.skills) {
      await skill.shutdown();
    }
    
    console.log('✅ Agent已关闭');
  }
}
