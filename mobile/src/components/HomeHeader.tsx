import { Heading, HStack ,VStack, Text, Icon } from "@gluestack-ui/themed";
import { LogOut } from "lucide-react-native"

import { UserPhoto } from "./userPhoto";

export function HomeHeader(){
    return (
        <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
            <UserPhoto source={{uri: "https://github.com/omarcelobenites.png"}} 
            w="$16"
            h="$16"
            alt="Imagem do Usuario"/>
            <VStack flex={1}>
            <Text color="$gray100" fontSize="$sm">
                 Olá, 
            </Text>
            <Heading color="$gray100"  fontSize="$md">
                Marcelo Benites</Heading>
            </VStack>
           
            <Icon as ={LogOut} color="$gray200" size="xl" />
        </HStack>
    )
}