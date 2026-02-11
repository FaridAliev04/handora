import { useQuery } from '@tanstack/react-query';
import { getSearchService, getUserService } from '../action/nav.server';


export const useUser = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: () => getUserService(),
        enabled: !!localStorage.getItem("token"), 
        retry: false 
    });
};

export const useSearch = (searchTerm:any) => {
    return useQuery({
       queryKey: ['search', searchTerm],
        queryFn: () => getSearchService(searchTerm), 
    });
};
