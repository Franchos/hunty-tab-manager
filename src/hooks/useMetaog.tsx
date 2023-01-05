import { useEffect, useState } from "react";

export interface MetaogData {
  title: string;
  description: string;
  images: string[];
  duration: number;
  domain: string;
}

export interface MetaogState {
  loading: boolean;
  data: MetaogData;
  error: boolean;
}

type UseMetaog = (url: string) => { metaState: MetaogState };

export const META_OG_API = "https://jsonlink.io/api/extract?url=";

export const useMetaog: UseMetaog = (url) => {
  const [metaState, setMetaState] = useState<MetaogState>({
    loading: false,
    data: {
      title: "",
      description: "",
      images: [""],
      duration: 0,
      domain: "",
    },
    error: false,
  });

  useEffect(() => {
    const fetchMetaData = async () => {
      setMetaState({ ...metaState, loading: true });
      try {
        const response = await fetch(META_OG_API + url);

        const data = await response.json();

        if (data.images[0])
          return setMetaState({ loading: false, data, error: false });
        else {
          const [https, _, domain, rest] = url?.split("/");

          const response = await fetch(META_OG_API + https + "//" + domain);

          const data = await response.json();

          return setMetaState({ loading: false, data, error: false });
        }
      } catch (error) {
        setMetaState({ ...metaState, loading: false, error: true });
      }
    };

    if (url) {
      fetchMetaData();
    }
  }, [url]);

  return { metaState };
};
