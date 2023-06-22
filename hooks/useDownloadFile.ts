import { AxiosResponse } from 'axios';
import { useRef, useState } from 'react';

interface DownloadFileProps {
  readonly apiDefinition: () => Promise<AxiosResponse<Blob>>;
}

interface DownloadedFileInfo {
  readonly download: () => Promise<void>;
  readonly ref: React.MutableRefObject<HTMLAnchorElement | null>;
  readonly url: string | undefined;
}

export const useDownloadFile = ({ apiDefinition }: DownloadFileProps): DownloadedFileInfo => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [url, setFileUrl] = useState<string>();

  const download = async () => {
    try {
      const { data } = await apiDefinition();
      console.log(data);
      const url = URL.createObjectURL(data);
      setFileUrl(url);
      ref.current?.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error);
    }
  };

  return { download, ref, url };
};
