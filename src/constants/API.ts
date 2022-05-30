export type Print = {
  id: string;
  title: string;
  slug: string;
  description: {
    html: string;
  };
  isActive: boolean;
  updatedAt: string;
  triloShortCode: string;
  coverPhoto: {
    url: string;
    width: number;
    height: number;
  };
  tags: string[];
  triloPrice: number;
};
