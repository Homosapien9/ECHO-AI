export type BillingCycle = 'monthly' | 'annual'
export type Currency = 'USD' | 'EUR' | 'INR'
export type TierKey = 'starter' | 'professional' | 'enterprise'

type CurrencyMeta = {
  symbol: string
  rate: number
  label: string
}

type BillingMeta = {
  label: string
  cadence: string
  multiplier: number
}

export const currencyMeta: Record<Currency, CurrencyMeta> = {
  USD: { symbol: '$', rate: 1, label: 'USD' },
  EUR: { symbol: '€', rate: 0.93, label: 'EUR' },
  INR: { symbol: '₹', rate: 83.4, label: 'INR' },
}

export const billingMeta: Record<BillingCycle, BillingMeta> = {
  monthly: { label: 'Monthly', cadence: '/mo', multiplier: 1 },
  annual: { label: 'Annual', cadence: '/mo billed yearly', multiplier: 0.8 },
}

export const tierBlueprint: Record<
  TierKey,
  {
    name: string
    blurb: string
    baseMonthlyUsd: number
    popular?: boolean
    cta: string
    features: string[]
  }
> = {
  starter: {
    name: 'Starter',
    blurb: 'For small teams poking the neural bear.',
    baseMonthlyUsd: 24,
    cta: 'Launch Starter',
    features: ['3 live operators', '25K event traces', 'Adaptive anomaly flags', 'Email support'],
  },
  professional: {
    name: 'Professional',
    blurb: 'Balanced for fast-moving product and data squads.',
    baseMonthlyUsd: 79,
    popular: true,
    cta: 'Start Pro Trial',
    features: ['Unlimited dashboards', '250K event traces', 'Scenario replays', 'Priority support', 'Shared playbooks'],
  },
  enterprise: {
    name: 'Enterprise',
    blurb: 'For giant systems with giant trust issues.',
    baseMonthlyUsd: 189,
    cta: 'Talk to ECHO',
    features: ['Private mesh routing', 'SLA + region pinning', 'Operator SSO', 'Dedicated solution architect', 'Custom inference lanes'],
  },
}

export const tierOrder: TierKey[] = ['starter', 'professional', 'enterprise']

type PriceCell = {
  full: string
  amount: string
  symbol: string
  cadence: string
}

export const pricingMatrix: Record<TierKey, Record<BillingCycle, Record<Currency, PriceCell>>> = tierOrder.reduce(
  (acc, tierKey) => {
    const tier = tierBlueprint[tierKey]
    acc[tierKey] = {
      monthly: {} as Record<Currency, PriceCell>,
      annual: {} as Record<Currency, PriceCell>,
    }

    ;(['monthly', 'annual'] as BillingCycle[]).forEach((billing) => {
      ;(['USD', 'EUR', 'INR'] as Currency[]).forEach((currency) => {
        const converted = tier.baseMonthlyUsd * currencyMeta[currency].rate * billingMeta[billing].multiplier
        const amount = converted.toFixed(currency === 'INR' ? 0 : 2)
        acc[tierKey][billing][currency] = {
          full: `${currencyMeta[currency].symbol}${amount}`,
          amount,
          symbol: currencyMeta[currency].symbol,
          cadence: billingMeta[billing].cadence,
        }
      })
    })

    return acc
  },
  {} as Record<TierKey, Record<BillingCycle, Record<Currency, PriceCell>>>
)

export function getPriceCell(tier: TierKey, billing: BillingCycle, currency: Currency) {
  return pricingMatrix[tier][billing][currency]
}
