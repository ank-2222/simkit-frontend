/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ProductCategory {
  created_at: string;
  handle: string;
  id: string;
  is_active: boolean;
  is_internal: boolean;
  metadata: Record<string, unknown>;
  mpath: string;
  name: string;
  parent_category_id: string | null;
  updated_at: string;
  description: string;
  rank: number;
  parent_category: Record<string, unknown>;
}


export interface StoreRegion {
  region_id: string;
  currency_code: string;
}