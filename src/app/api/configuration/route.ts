import { getConfiguration, updateConfiguration } from '@/app/lib/repositories/configuration';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const config = await getConfiguration();
  return NextResponse.json(config);
}

export async function PATCH(req: NextRequest) {
  const body = await req.json();

  const { agencyName, payAffiliateProgram, payAffiliateProgramPercentage, applyPenalties, penaltyPercentage, mlcChangeRate } = body;

  const configuration = {
    id: '1',
    agencyName,
    payAffiliateProgram,
    payAffiliateProgramPercentage: Number(payAffiliateProgramPercentage),
    applyPenalties,
    penaltyPercentage: Number(penaltyPercentage),
    mlcChangeRate: Number(mlcChangeRate),
  };

  const updated = await updateConfiguration(configuration);
  return NextResponse.json(updated);
}
