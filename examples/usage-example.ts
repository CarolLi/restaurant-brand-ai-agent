import { RestaurantBrandAgent } from '../src/core/agent';
import { ExecutionContext } from '../src/core/types';

async function main() {
  const agent = new RestaurantBrandAgent();
  
  // 初始化
  await agent.initialize();

  // 创建执行上下文
  const context: ExecutionContext = {
    userId: 'user_123',
    brandId: 'brand_001',
    sessionId: 'session_abc123',
    timestamp: new Date()
  };

  // 示例1: 获取销售分析
  console.log('\n📊 获取销售分析...');
  const salesResult = await agent.executeSkill('sales-analytics', context);
  console.log('销售分析结果:', salesResult.data);

  // 示例2: 获取品牌营销建议
  console.log('\n🎯 获取品牌营销建议...');
  const marketingResult = await agent.executeSkill('brand-marketing', context);
  console.log('营销建议:', marketingResult.data);

  // 示例3: 一次性执行多个Skills
  console.log('\n🔄 执行综合分析...');
  const multiResults = await agent.executeMultipleSkills(
    ['sales-analytics', 'customer-management', 'operational-efficiency'],
    context
  );

  for (const [skillName, result] of multiResults) {
    console.log(`${skillName}: ${result.success ? '成功' : '失败'}`);
  }

  // 获取可用Skills列表
  console.log('\n📚 可用Skills:', agent.getAvailableSkills());

  // 关闭
  await agent.shutdown();
}

main().catch(console.error);
