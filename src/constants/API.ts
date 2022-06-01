export type Print = {
  id: string;
  title: string;
  slug: string;
  description: {
    html: string;
  };
  isActive: boolean;
  updatedAt: string;
  coverPhoto: {
    url: string;
    width: number;
    height: number;
  };
  tags: string[];
  sellableEntities: {
    isAvailable: boolean;
    triloPrice: number;
    triloShortCode: string;
    title: string;
  }[];
};
