import React from 'react'
import { Flex, Spinner, Stack, Text } from "@chakra-ui/react"
import TodoItem from './TodoItem';
import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from '../App';

type Todo = {
    _id: number;
    body: string;
    completed: boolean;
}
const TodoList: React.FC = () => {

    const { data: todos, isLoading } = useQuery<Todo[]>({
        queryKey: ['todos'],
        queryFn: async () => {
            try {
                const res = await fetch(BASE_URL);
                const data = await res.json()

                if (!res.ok) {
                    throw new Error(data.error || "Something went wrong");
                }
                return data || []
            } catch (error) {
                console.error(error)
            }
        }
    });

    return (
        <>
            <Text
                bgGradient="linear(to-l,#0B85F8, #00FFFF)"
                bgClip={"text"}
                fontSize={"6xl"}
                textTransform={"uppercase"}
                fontWeight={"bold"}
                textAlign={"center"}
                my={2}
            >
                Today's Tasks
            </Text>
            {isLoading && (
                <Flex
                    justifyContent={"center"}
                    my={4}
                >
                    <Spinner size={"xl"} />
                </Flex>
            )}
            {!isLoading && todos?.length === 0 && (
                <Stack alignItems={"center"} gap={"3"} justifyContent={'center'}>
                    <Text fontSize={"2xl"} textAlign={"center"} color={"gray.500"}>
                        All tasks completed ✌
                    </Text>
                    <img src='/go.png' alt="Go logo" width={120} height={120} />
                </Stack>
            )}
            <Stack gap={3}>
                {todos?.map((todo) => (
                    <TodoItem key={todo._id} todo={todo} />
                ))}
            </Stack>

        </>
    )
}

export default TodoList
