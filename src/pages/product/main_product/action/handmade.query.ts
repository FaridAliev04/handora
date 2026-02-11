import { useQuery } from '@tanstack/react-query';
import { getHandMadeService } from './handmade.server';

export const useHandMade = (id:any) => {
    return useQuery({
        queryKey: ['product',id], 
        queryFn: () => getHandMadeService(id), 
    });
};