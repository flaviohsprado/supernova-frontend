import { IconButton } from "@chakra-ui/react";
import { FiDelete } from "react-icons/fi";

export interface IDeleteButtonProps {
    handleDelete(id: string): void;
    id: string
}

export default function DeleteButton({ handleDelete, id }: IDeleteButtonProps) {
    return (
        <IconButton
            onClick={() => handleDelete(id)}
            aria-label="Delete"
            icon={<FiDelete />}
            color={'black'}
            _hover={{
                bg: '#1DB954',
                color: 'white'
            }}
        />
    )
}