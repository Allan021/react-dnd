export interface Editor {
  pk: number;
  user: string;
  stores: Store[];
}
export interface Store {
  pk: number;
  name: string;
  identifier: string;
  brand_logo: string;
}

export interface ExampleData {
  Editors: Editor[];
  columnsIds: string[];
  columns: {
    [key: string]: {
      pk: number;
      user: string;
      stores: Store[];
    };
  };
}

export const exampleData: ExampleData = {
  Editors: [
    {
      pk: 436,
      user: "preyes@signscloud.com",
      stores: [
        {
          pk: 254,
          name: "City Fresh Market - 39-07 103Rd St",
          identifier: "city_fresh_39_07_103rd_street",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 255,
          name: "City Fresh Market - 68 West Post Road",
          identifier: "city_fresh_68_west_post_road",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 256,
          name: "City Fresh Market - 235 E 106th Street",
          identifier: "city_fresh_market_235_e_106th_street",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 257,
          name: "City Fresh Market - 125 E 116Th Street",
          identifier: "city_fresh_market_125_e_116th_street",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 258,
          name: "City Fresh Market - 2212 3rd Avenue",
          identifier: "city_fresh_2212_3rd_avenue_manhattan",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 259,
          name: "City Fresh Market - 122-17 20th Ave College Point",
          identifier: "city_fresh_market_122_17_20th_ave_college_point",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 260,
          name: "City Fresh Market - 229 Knickerbocker Avenue",
          identifier: "city_fresh_229_knickerbocker_avenue",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 261,
          name: "City Fresh Market - 518 32nd Street (Mi Bandera)",
          identifier: "city_fresh_518_32nd_street_union_city",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 262,
          name: "City Fresh Market - 1380 Pennsylvania Avenue",
          identifier: "city_fresh_1380_pennsylvania_avenue",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 263,
          name: "City Fresh Market - 2115 Broadway Astoria",
          identifier: "city_fresh_2115_broadway_astoria",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 264,
          name: "City Fresh Market - 2477 Valentine Avenue",
          identifier: "city_fresh_2477_valentine_avenue",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 322,
          name: "City Fresh 45-02 Junction Blvd.94-53 Corona Ave. Queens, Ny 11373",
          identifier:
            "city_fresh_45_02_junction_blvd94_53_corona_ave_queens_ny_11373",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 324,
          name: "City Fresh 57 Kingsland Ave.",
          identifier: "city_fresh_57_kingsland_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
      ],
    },

    {
      pk: 438,
      user: "mgiron@singscloud.com",
      stores: [
        {
          pk: 244,
          name: "Cherry Valley Marketplace - 54 E Suffolk Avenue",
          identifier: "cherry_valley_marketplace_54_e_suffolk_avenue",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/78/3b8aad23-4425-4e68-a6bf-e49060e22bef.jpg",
        },
        {
          pk: 246,
          name: "Cherry Valley Marketplace - 309 E 115th Street",
          identifier: "cherry_valley_marketplace_115th_manhattan",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/78/3b8aad23-4425-4e68-a6bf-e49060e22bef.jpg",
        },
        {
          pk: 248,
          name: "Cherry Valley Marketplace - 529 Broadway",
          identifier: "cherry_valley_marketplace_529_broadway_yonkers",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/78/3b8aad23-4425-4e68-a6bf-e49060e22bef.jpg",
        },
        {
          pk: 249,
          name: "Cherry Valley Marketplace - 801 E Gun Hill Road",
          identifier: "cherry_valley_marketplace_801_e_gun_hill",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/78/3b8aad23-4425-4e68-a6bf-e49060e22bef.jpg",
        },
        {
          pk: 250,
          name: "Cherry Valley Marketplace - 1115 Pennsylvania Avenue",
          identifier: "cherry_valley_marketplace_1115_pennsylvania",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/78/3b8aad23-4425-4e68-a6bf-e49060e22bef.jpg",
        },
        {
          pk: 251,
          name: "Cherry Valley Marketplace - 2870 Webster Avenue",
          identifier: "cherry_valley_marketplace_2870_webster",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/78/3b8aad23-4425-4e68-a6bf-e49060e22bef.jpg",
        },
        {
          pk: 252,
          name: "Cherry Valley Marketplace - 4800 Park Avenue",
          identifier: "cherry_valley_marketplace_4800_park_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/78/3b8aad23-4425-4e68-a6bf-e49060e22bef.jpg",
        },
        {
          pk: 253,
          name: "Cherry Valley Marketplace - 381 Mother Gaston Blvd",
          identifier: "cherry_valley_marketplace_381_mother_gaston_blvd",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/78/3b8aad23-4425-4e68-a6bf-e49060e22bef.jpg",
        },
        {
          pk: 276,
          name: "Cherry Valley Marketplace - 84-12 97th Avenue (Rockaway)",
          identifier: "cherry_valley_marketplace_84_12_ozone_park",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/78/3b8aad23-4425-4e68-a6bf-e49060e22bef.jpg",
        },
        {
          pk: 306,
          name: "Cherry Valley Marketplace - 155 Thomaston Ave",
          identifier: "cherry_valley_marketplace_155_thomaston_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/78/3b8aad23-4425-4e68-a6bf-e49060e22bef.jpg",
        },
        {
          pk: 474,
          name: "C-Town Supermarket 165 Wethersfield Ave",
          identifier: "ctown_supermarket_165_wethersfield_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/98/1f97f110-55a6-4510-9576-6ac3243baf0c.jpg",
        },
        {
          pk: 489,
          name: "Ctown Supermarket 445 S Franklin St",
          identifier: "ctown_supermarket_445_s_franklin_st",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/98/1f97f110-55a6-4510-9576-6ac3243baf0c.jpg",
        },
        {
          pk: 490,
          name: "Ctown Supermarkets 565 Uniondale Ave",
          identifier: "ctown_supermarkets_565_uniondale_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/98/1f97f110-55a6-4510-9576-6ac3243baf0c.jpg",
        },
      ],
    },
    {
      pk: 439,
      user: "spacheco@signscloud.com",
      stores: [
        {
          pk: 243,
          name: "Bravo Supermarket - 24-18 Long Island City",
          identifier: "bravo_fresh_market_24_18_long_island_city",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/86/a06bd2e0-87a9-4af0-b76d-c9984b12bad6.jpg",
        },
        {
          pk: 293,
          name: "Super Supermarket - 53 South Jefferson St",
          identifier: "super_supermarket_53_jefferson_street",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/85/635435eb-e687-4a83-873f-421b17393414.jpg",
        },
        {
          pk: 294,
          name: "Super Supermarket - 1007 Memorial",
          identifier: "super_supermarket_1007_memorial_asbury_park",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/85/635435eb-e687-4a83-873f-421b17393414.jpg",
        },
        {
          pk: 295,
          name: "Super Supermarket - 30 Main Street",
          identifier: "super_supermarket_30_main_street",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/85/635435eb-e687-4a83-873f-421b17393414.jpg",
        },
        {
          pk: 296,
          name: "Super Supermarket - 810 North 6th Street",
          identifier: "super_supermarket_810_north_6th_street",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/85/635435eb-e687-4a83-873f-421b17393414.jpg",
        },
        {
          pk: 447,
          name: "Burnside Meat Market & Grocery 271 Burnside Ave",
          identifier: "burnside_meat_market_and_grocery_271_burnside_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/130/89ab0663-2b2a-4a29-9041-22627769bc99.png",
        },
        {
          pk: 497,
          name: "Rego Fresh Marketplace 63-76 Woodhaven Blvd",
          identifier: "rego_fresh_marketplace_6376_woodhaven_blvd",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/151/38ac8a36-5300-4542-81cc-c4717603e13c.jpg",
        },
        {
          pk: 501,
          name: "Bravo Supermarket 80 E 93Rd St",
          identifier: "bravo_supermarket_80_e_93rd_st",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/86/a06bd2e0-87a9-4af0-b76d-c9984b12bad6.jpg",
        },
        {
          pk: 503,
          name: "Bravo Supermarket 174 Wheeler Rd",
          identifier: "bravo_supermarket_174_wheeler_rd",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/86/a06bd2e0-87a9-4af0-b76d-c9984b12bad6.jpg",
        },
        {
          pk: 506,
          name: "Key Food 72-80 Wyckoff Ave",
          identifier: "key_food_7280_wyckoff_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/89/a2fdf4fa-1c9f-4581-9d3f-40f68842d1cc.jpg",
        },
        {
          pk: 508,
          name: "Pioneer 1345 Castle Hill Ave",
          identifier: "pioneer_1345_castle_hill_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/106/f8bae77b-9633-4c5d-a30b-baf56cae382a.jpg",
        },
        {
          pk: 509,
          name: "Ctown 107-66 Cross Bay Blvd",
          identifier: "ctown_10766_cross_bay_blvd",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/98/1f97f110-55a6-4510-9576-6ac3243baf0c.jpg",
        },
      ],
    },

    {
      pk: 518,
      user: "rnuila@signscloud.com",
      stores: [
        {
          pk: 279,
          name: "Food Universe Marketplace - 60 West 183rd Street",
          identifier: "food_universe_60_west_183rd_street",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/83/06c24ccb-2408-4c13-bbb9-870f32c48905.jpg",
        },
        {
          pk: 280,
          name: "Food Universe Marketplace - 2358 University Ave",
          identifier: "food_universe_2358_university_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/83/06c24ccb-2408-4c13-bbb9-870f32c48905.jpg",
        },
        {
          pk: 303,
          name: "Food Universe Marketplace - 498 E 30th St",
          identifier: "food_universe_marketplace_498_e_30th_street",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/83/06c24ccb-2408-4c13-bbb9-870f32c48905.jpg",
        },
        {
          pk: 319,
          name: "Food Universe 1550 Great Neck Rd.",
          identifier: "food_universe_1550_great_neck_rd",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/83/06c24ccb-2408-4c13-bbb9-870f32c48905.jpg",
        },
        {
          pk: 385,
          name: "Golden Farms 416 Crescent St.",
          identifier: "golden_farms_416_crescent_st",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/121/9d7fd30a-35d0-480f-90c7-ed37635228c2.jpg",
        },
        {
          pk: 488,
          name: "Food Universe Marketplace 1334 Louis Niñé Blvd",
          identifier: "food_universe_marketplace_1334_louis_nine_blvd",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/83/06c24ccb-2408-4c13-bbb9-870f32c48905.jpg",
        },
        {
          pk: 500,
          name: "Food Universe 20 Elizabeth St,",
          identifier: "food_universe_20_elizabeth_st",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/83/06c24ccb-2408-4c13-bbb9-870f32c48905.jpg",
        },
        {
          pk: 502,
          name: "Ctown 721 Broadway",
          identifier: "ctown_721_broadway",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/98/1f97f110-55a6-4510-9576-6ac3243baf0c.jpg",
        },
        {
          pk: 504,
          name: "Compare Fresh Market 1242 Hamilton Ave",
          identifier: "compare_fresh_market_1242_hamilton_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/152/14e3ebfc-2290-4194-bcdb-f72b4ca74ffb.jpg",
        },
        {
          pk: 505,
          name: "Super Fresh Market 1434 Jerome Ave",
          identifier: "super_fresh_market_1434_jerome_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/148/34bfde41-ee91-49aa-bd7d-bc0dd7b36889.jpg",
        },
      ],
    },
  ],
  columnsIds: [
    "preyes@signscloud.com",
    "mgiron@singscloud.com",
    "rnuila@signscloud.com",
    "spacheco@signscloud.com",
  ],
  columns: {
    "preyes@signscloud.com": {
      pk: 436,
      stores: [
        {
          pk: 254,
          name: "City Fresh Market - 39-07 103Rd St",
          identifier: "city_fresh_39_07_103rd_street",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 255,
          name: "City Fresh Market - 68 West Post Road",
          identifier: "city_fresh_68_west_post_road",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 256,
          name: "City Fresh Market - 235 E 106th Street",
          identifier: "city_fresh_market_235_e_106th_street",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 257,
          name: "City Fresh Market - 125 E 116Th Street",
          identifier: "city_fresh_market_125_e_116th_street",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 258,
          name: "City Fresh Market - 2212 3rd Avenue",
          identifier: "city_fresh_2212_3rd_avenue_manhattan",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 259,
          name: "City Fresh Market - 122-17 20th Ave College Point",
          identifier: "city_fresh_market_122_17_20th_ave_college_point",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 260,
          name: "City Fresh Market - 229 Knickerbocker Avenue",
          identifier: "city_fresh_229_knickerbocker_avenue",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 261,
          name: "City Fresh Market - 518 32nd Street (Mi Bandera)",
          identifier: "city_fresh_518_32nd_street_union_city",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 262,
          name: "City Fresh Market - 1380 Pennsylvania Avenue",
          identifier: "city_fresh_1380_pennsylvania_avenue",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 263,
          name: "City Fresh Market - 2115 Broadway Astoria",
          identifier: "city_fresh_2115_broadway_astoria",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 264,
          name: "City Fresh Market - 2477 Valentine Avenue",
          identifier: "city_fresh_2477_valentine_avenue",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 322,
          name: "City Fresh 45-02 Junction Blvd.94-53 Corona Ave. Queens, Ny 11373",
          identifier:
            "city_fresh_45_02_junction_blvd94_53_corona_ave_queens_ny_11373",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
        {
          pk: 324,
          name: "City Fresh 57 Kingsland Ave.",
          identifier: "city_fresh_57_kingsland_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/79/1a05d0df-5400-4cca-9a30-f4347c3e3591.jpg",
        },
      ],
      user: "preyes@signscloud.com",
    },
    "mgiron@singscloud.com": {
      pk: 438,
      stores: [
        {
          pk: 244,
          name: "Cherry Valley Marketplace - 54 E Suffolk Avenue",
          identifier: "cherry_valley_marketplace_54_e_suffolk_avenue",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/78/3b8aad23-4425-4e68-a6bf-e49060e22bef.jpg",
        },
        {
          pk: 246,
          name: "Cherry Valley Marketplace - 309 E 115th Street",
          identifier: "cherry_valley_marketplace_115th_manhattan",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/78/3b8aad23-4425-4e68-a6bf-e49060e22bef.jpg",
        },
        {
          pk: 248,
          name: "Cherry Valley Marketplace - 529 Broadway",
          identifier: "cherry_valley_marketplace_529_broadway_yonkers",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/78/3b8aad23-4425-4e68-a6bf-e49060e22bef.jpg",
        },
        {
          pk: 249,
          name: "Cherry Valley Marketplace - 801 E Gun Hill Road",
          identifier: "cherry_valley_marketplace_801_e_gun_hill",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/78/3b8aad23-4425-4e68-a6bf-e49060e22bef.jpg",
        },
        {
          pk: 250,
          name: "Cherry Valley Marketplace - 1115 Pennsylvania Avenue",
          identifier: "cherry_valley_marketplace_1115_pennsylvania",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/78/3b8aad23-4425-4e68-a6bf-e49060e22bef.jpg",
        },
        {
          pk: 251,
          name: "Cherry Valley Marketplace - 2870 Webster Avenue",
          identifier: "cherry_valley_marketplace_2870_webster",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/78/3b8aad23-4425-4e68-a6bf-e49060e22bef.jpg",
        },
        {
          pk: 252,
          name: "Cherry Valley Marketplace - 4800 Park Avenue",
          identifier: "cherry_valley_marketplace_4800_park_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/78/3b8aad23-4425-4e68-a6bf-e49060e22bef.jpg",
        },
        {
          pk: 253,
          name: "Cherry Valley Marketplace - 381 Mother Gaston Blvd",
          identifier: "cherry_valley_marketplace_381_mother_gaston_blvd",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/78/3b8aad23-4425-4e68-a6bf-e49060e22bef.jpg",
        },
        {
          pk: 276,
          name: "Cherry Valley Marketplace - 84-12 97th Avenue (Rockaway)",
          identifier: "cherry_valley_marketplace_84_12_ozone_park",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/78/3b8aad23-4425-4e68-a6bf-e49060e22bef.jpg",
        },
        {
          pk: 306,
          name: "Cherry Valley Marketplace - 155 Thomaston Ave",
          identifier: "cherry_valley_marketplace_155_thomaston_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/78/3b8aad23-4425-4e68-a6bf-e49060e22bef.jpg",
        },
        {
          pk: 474,
          name: "C-Town Supermarket 165 Wethersfield Ave",
          identifier: "ctown_supermarket_165_wethersfield_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/98/1f97f110-55a6-4510-9576-6ac3243baf0c.jpg",
        },
        {
          pk: 489,
          name: "Ctown Supermarket 445 S Franklin St",
          identifier: "ctown_supermarket_445_s_franklin_st",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/98/1f97f110-55a6-4510-9576-6ac3243baf0c.jpg",
        },
        {
          pk: 490,
          name: "Ctown Supermarkets 565 Uniondale Ave",
          identifier: "ctown_supermarkets_565_uniondale_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/98/1f97f110-55a6-4510-9576-6ac3243baf0c.jpg",
        },
      ],
      user: "mgiron@singscloud.com",
    },
    "spacheco@signscloud.com": {
      pk: 439,
      stores: [
        {
          pk: 243,
          name: "Bravo Supermarket - 24-18 Long Island City",
          identifier: "bravo_fresh_market_24_18_long_island_city",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/86/a06bd2e0-87a9-4af0-b76d-c9984b12bad6.jpg",
        },
        {
          pk: 293,
          name: "Super Supermarket - 53 South Jefferson St",
          identifier: "super_supermarket_53_jefferson_street",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/85/635435eb-e687-4a83-873f-421b17393414.jpg",
        },
        {
          pk: 294,
          name: "Super Supermarket - 1007 Memorial",
          identifier: "super_supermarket_1007_memorial_asbury_park",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/85/635435eb-e687-4a83-873f-421b17393414.jpg",
        },
        {
          pk: 295,
          name: "Super Supermarket - 30 Main Street",
          identifier: "super_supermarket_30_main_street",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/85/635435eb-e687-4a83-873f-421b17393414.jpg",
        },
        {
          pk: 296,
          name: "Super Supermarket - 810 North 6th Street",
          identifier: "super_supermarket_810_north_6th_street",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/85/635435eb-e687-4a83-873f-421b17393414.jpg",
        },
        {
          pk: 447,
          name: "Burnside Meat Market & Grocery 271 Burnside Ave",
          identifier: "burnside_meat_market_and_grocery_271_burnside_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/130/89ab0663-2b2a-4a29-9041-22627769bc99.png",
        },
        {
          pk: 497,
          name: "Rego Fresh Marketplace 63-76 Woodhaven Blvd",
          identifier: "rego_fresh_marketplace_6376_woodhaven_blvd",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/151/38ac8a36-5300-4542-81cc-c4717603e13c.jpg",
        },
        {
          pk: 501,
          name: "Bravo Supermarket 80 E 93Rd St",
          identifier: "bravo_supermarket_80_e_93rd_st",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/86/a06bd2e0-87a9-4af0-b76d-c9984b12bad6.jpg",
        },
        {
          pk: 503,
          name: "Bravo Supermarket 174 Wheeler Rd",
          identifier: "bravo_supermarket_174_wheeler_rd",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/86/a06bd2e0-87a9-4af0-b76d-c9984b12bad6.jpg",
        },
        {
          pk: 506,
          name: "Key Food 72-80 Wyckoff Ave",
          identifier: "key_food_7280_wyckoff_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/89/a2fdf4fa-1c9f-4581-9d3f-40f68842d1cc.jpg",
        },
        {
          pk: 508,
          name: "Pioneer 1345 Castle Hill Ave",
          identifier: "pioneer_1345_castle_hill_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/106/f8bae77b-9633-4c5d-a30b-baf56cae382a.jpg",
        },
        {
          pk: 509,
          name: "Ctown 107-66 Cross Bay Blvd",
          identifier: "ctown_10766_cross_bay_blvd",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/98/1f97f110-55a6-4510-9576-6ac3243baf0c.jpg",
        },
      ],
      user: "spacheco@signscloud.com",
    },
    "rnuila@signscloud.com": {
      pk: 518,
      user: "rnuila@signscloud.com",
      stores: [
        {
          pk: 279,
          name: "Food Universe Marketplace - 60 West 183rd Street",
          identifier: "food_universe_60_west_183rd_street",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/83/06c24ccb-2408-4c13-bbb9-870f32c48905.jpg",
        },
        {
          pk: 280,
          name: "Food Universe Marketplace - 2358 University Ave",
          identifier: "food_universe_2358_university_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/83/06c24ccb-2408-4c13-bbb9-870f32c48905.jpg",
        },
        {
          pk: 303,
          name: "Food Universe Marketplace - 498 E 30th St",
          identifier: "food_universe_marketplace_498_e_30th_street",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/83/06c24ccb-2408-4c13-bbb9-870f32c48905.jpg",
        },
        {
          pk: 319,
          name: "Food Universe 1550 Great Neck Rd.",
          identifier: "food_universe_1550_great_neck_rd",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/83/06c24ccb-2408-4c13-bbb9-870f32c48905.jpg",
        },
        {
          pk: 385,
          name: "Golden Farms 416 Crescent St.",
          identifier: "golden_farms_416_crescent_st",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/121/9d7fd30a-35d0-480f-90c7-ed37635228c2.jpg",
        },
        {
          pk: 488,
          name: "Food Universe Marketplace 1334 Louis Niñé Blvd",
          identifier: "food_universe_marketplace_1334_louis_nine_blvd",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/83/06c24ccb-2408-4c13-bbb9-870f32c48905.jpg",
        },
        {
          pk: 500,
          name: "Food Universe 20 Elizabeth St,",
          identifier: "food_universe_20_elizabeth_st",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/83/06c24ccb-2408-4c13-bbb9-870f32c48905.jpg",
        },
        {
          pk: 502,
          name: "Ctown 721 Broadway",
          identifier: "ctown_721_broadway",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/98/1f97f110-55a6-4510-9576-6ac3243baf0c.jpg",
        },
        {
          pk: 504,
          name: "Compare Fresh Market 1242 Hamilton Ave",
          identifier: "compare_fresh_market_1242_hamilton_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/152/14e3ebfc-2290-4194-bcdb-f72b4ca74ffb.jpg",
        },
        {
          pk: 505,
          name: "Super Fresh Market 1434 Jerome Ave",
          identifier: "super_fresh_market_1434_jerome_ave",
          brand_logo:
            "https://www.testapi.circularss.com/media/published/brands/logos/148/34bfde41-ee91-49aa-bd7d-bc0dd7b36889.jpg",
        },
      ],
    },
  },
};
