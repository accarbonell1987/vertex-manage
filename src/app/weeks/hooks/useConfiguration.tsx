import useStoreConfiguration from '@/context/useStoreConfiguration';
import { getConfiguration } from '@/services/configuration';
import { useCallback, useEffect } from 'react';

const useConfiguration = () => {
  const { configuration, changeConfiguration } = useStoreConfiguration();

  const fetchConfiguration = useCallback(async () => {
    const storageConfiguration = localStorage.getItem('configuration');
    if (!storageConfiguration) {
      const config = await getConfiguration();
      if (!config) throw new Error('No se pudo obtener la configuración.');
      localStorage.setItem('configuration', JSON.stringify(config));
      changeConfiguration(config);
      return;
    }

    changeConfiguration(JSON.parse(storageConfiguration));
  }, [changeConfiguration]);

  useEffect(() => {
    fetchConfiguration();
  }, [fetchConfiguration]);

  return { configuration };
};

export default useConfiguration;
