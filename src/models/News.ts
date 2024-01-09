type TwitterMisc = {
  'Est. tempo de leitura': string;
};

type OgImage = {
  url: string;
};

type YoastHeadJson = {
  title: string;
  og_description: string;
  og_image: OgImage[];
  twitter_misc: TwitterMisc;
};

type Title = {
  rendered: string;
};

export interface News {
  id: number;
  date: string;
  title: Title;
  link: string;
  yoast_head_json: YoastHeadJson;
}
