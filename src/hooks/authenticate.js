import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const getUserToken = () => {
    const { data, error, isLoading } = useQuery(['user', () => {
        
    }])
}