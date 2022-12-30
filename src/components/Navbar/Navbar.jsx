import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Collapse,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Logo</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
              <Link to="/">
        <button>Home</button>
      </Link>

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <button>Sign Up</button>{" "}
          </Link>
          <Link to="/login">
              {" "}
              <button>Login</button>{" "}
              </Link>
         </>
        )}

             {props.user ?(
              <>
            <div>
              </div>
                 </>
                    ):( 
                      <div>
                        {isLoggedIn && (
                          <>
                        <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}>
                        <Avatar
                          size={'sm'}
                          src={'https://avatars.dicebear.com/api/male/username.svg'}
                        />
                      </MenuButton>
                      
                  
                      <MenuList alignItems={'center'}>
                        <br />
                        <Center>
                          <Avatar
                            size={'2xl'}
                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                          />
                        </Center>
                        <br />
                        <Center>
                        <p>{user && user.name}</p>
                        </Center>
                        <br />
                        <MenuDivider />
                      
                        <MenuItem> 
                            <Link to="/profile">
                              <button>Profile</button>
                              {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
                            </Link>
                          </MenuItem>
                        <MenuItem> 
                        
                              <button onClick={logOutUser}>Logout</button>
                        
                          </MenuItem>
                    
                      </MenuList>
            </>
               )}
            </div>
             )}
                
                

              </Menu>
            </Stack>
          </Flex>
        </Flex>
        
      </Box>
    </>
  );
}
