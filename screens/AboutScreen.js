import MainLayout from '../layouts/MainLayout';
import { Text } from 'react-native'; 

export default function AboutScreen(){
    const getCurrentDate = () =>{
        let date = new Date().getDate();
        let month = new Date().getMonth() +1;
        let year = new Date().getFullYear();
        return `${date}/${month}/${year}`;
    }
    return(
        <MainLayout>
            <Text>My Incredible Todo List</Text>
            <Text>Name: Tien Phap Nguyen</Text>
            <Text>Today Date: {getCurrentDate()}</Text>
        </MainLayout>
    );
}