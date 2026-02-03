import { useQuery } from '@tanstack/react-query';
import { getSuggesteddService } from '../action/suggested.service';

export const useSuggested = () => {
    return useQuery({
        queryKey: ['news'], 
        queryFn: () => getSuggesteddService(), 
    });
};