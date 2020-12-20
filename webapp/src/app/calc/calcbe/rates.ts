export const nmPts = [
	[0, 0, 0, 0],
	// A,D,H,C
	[0, 0, 0, 0],
	[0, 6, 0, 1],
	[4, 12, 4, 5],
	[6, 13, 5, 6],
	[9, 18, 9, 9],
	[13, 22, 13, 12],
	[15, 23, 14, 13],
	[19, 28, 17, 16],
	[25, 36, 23, 21],
];
export const nmXp = [
	[0, 0, 0],
	// A,F,M
	[8116, 21392, 11704],
	[12175, 32089, 17556],
	[16233, 42785, 23408],
	[20292, 53482, 29261],
	[28408, 74874, 40965],
	[36526, 96267, 52669],
	[48701, 128357, 70226],
	[60876, 160446, 87783],
	[77110, 203232, 111191],
	[23580, 60433, 33396],
];
export const nm10Primary = 80;
export const nm10Secondary = 5;

export const hmPts = [
	[0, 0, 0, 0],
	// A,D,H,C
	[8, 13, 11, 8],
	[17, 24, 19, 15],
	[25, 30, 25, 20],
	[28, 32, 28, 22],
	[39, 47, 46, 33],
	[48, 56, 56, 40],
	[53, 59, 60, 43],
	[67, 75, 82, 56],
	[71, 79, 86, 59],
];
export const hmXp = [
	[0, 0, 0],
	// A,F,M
	[8116, 21392, 11704],
	[12175, 32089, 17556],
	[16233, 42785, 23408],
	[20292, 53482, 29261],
	[28408, 74874, 40965],
	[36526, 96267, 52669],
	[48701, 128357, 70226],
	[60876, 160446, 87783],
	[77110, 203232, 111191],
	[97402, 256704, 140452],
];
export const hm10Primary = 210;
export const hm10Secondary = 15;

export const chargesPerWave = [
	0,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	4,
];

export type LeechPriceDur = {
	Price: number;
	Seconds: number;
}

export namespace LeechPriceDur {
	export function Equals(a: LeechPriceDur, b: LeechPriceDur): boolean {
		return a.Price === b.Price
	}
}

export const LeechPriceDurTable: {
	Empty: () => LeechPriceDur;
	Queen: (solo: boolean) => LeechPriceDur;
	HmUnlock: () => LeechPriceDur;
	HmUnlock69: () => LeechPriceDur;
	Ironman19: () => LeechPriceDur;
	Hm69Bxp: () => LeechPriceDur;
	Hm69Pts: () => LeechPriceDur;
	King: (solo: boolean) => LeechPriceDur;
	KingLowLvl: () => LeechPriceDur;
} = {
	Empty: () => ({ Price: 0, Seconds: 0 }),
	Queen: (solo: boolean) => ({ Price: 12000000 * (solo ? 2 : 1), Seconds: 20 * 60 }),
	HmUnlock: () => ({ Price: 10000000, Seconds: 20 * 60 }),
	HmUnlock69: () => ({ Price: 0, Seconds: 8 * 60 }),
	Ironman19: () => ({ Price: 12000000, Seconds: 20 * 60 }),
	Hm69Bxp: () => ({ Price: 5000000, Seconds: 10 * 60 }),
	Hm69Pts: () => ({ Price: 6500000, Seconds: 10 * 60 }),
	King: (solo: boolean) => ({ Price: 15000000 * (solo ? 2 : 1), Seconds: 20 * 60 }),
	KingLowLvl: () => ({ Price: 18000000, Seconds: 20 * 60 }),
}
