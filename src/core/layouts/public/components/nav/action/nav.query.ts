import { useQuery } from '@tanstack/react-query';
import { getSearchService } from '../action/nav.server';

export const useSearch = (searchTerm:any) => {
    return useQuery({
       queryKey: ['search', searchTerm],
        queryFn: () => getSearchService(searchTerm), 
    });
};