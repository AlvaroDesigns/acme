"use client";

import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Input,
  Modal,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Textarea,
  Skeleton,
} from "@nextui-org/react";
import { useState } from "react";
import { HeartIcon, SendIcon } from "@/utils/icons";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function DocsPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isVisible, setIsVisible] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <section>
        <Card className="max-w-[600px] space-y-5 p-4 rounded-lg mb-4">
          <Skeleton className="rounded-lg">
            <div className="h-14 rounded-lg bg-default-300"></div>
          </Skeleton>
        </Card>
        <div>
          {[...Array(4)].map((_) => (
            <Card
              className="w-[600px] space-y-5 p-4 mb-4"
              key={crypto.randomUUID()}
              radius="lg"
            >
              <CardHeader>
                <div className="max-w-[300px] w-full flex items-center gap-3">
                  <div>
                    <Skeleton className="flex rounded-full w-12 h-12" />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <Skeleton className="h-3 w-3/5 rounded-lg" />
                    <Skeleton className="h-3 w-4/5 rounded-lg" />
                  </div>
                </div>
              </CardHeader>
              <Skeleton className="rounded-lg">
                <div className="h-24 rounded-lg bg-default-300"></div>
              </Skeleton>
              <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                  <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
              </div>
            </Card>
          ))}
        </div>
        <Card className="max-w-[600px]">
          <CardHeader className="flex gap-3">
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              size="md"
            />
            <div className="flex flex-col w-full" onClick={handleOpen}>
              <Input
                radius="full"
                fullWidth={true}
                placeholder="¿Qué estás pensando, Álvaro?"
              />
            </div>
            <Modal size="lg" isOpen={isOpen} onClose={onClose}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Crear Publicación
                    </ModalHeader>
                    <ModalBody>
                      <div className="flex fle">
                        <Avatar
                          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                          size="md"
                        />
                        <p className="mt-2 ml-2">Álvaro</p>
                      </div>
                      <Textarea
                        label="Description"
                        placeholder="¿Qué estás pensando, Álvaro?"
                        className="w-full"
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="primary"
                        className="w-full"
                        onPress={onClose}
                      >
                        Publicar
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </CardHeader>
        </Card>
      </section>
      <section className="mt-4">
        <Card className="max-w-[600px]">
          <CardHeader className="flex gap-3">
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              size="md"
            />
            <div className="flex flex-row items-start w-full justify-between">
              <div className="flex flex-col items-start">
                <p className="leading-none">Paula</p>
                <span className="mt-2 text-sm leading-none text-gray">
                  16 de noviembre a las 19:31
                </span>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2 mr-1 mt-1"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                  width={undefined}
                  height={undefined}
                  color={liked ? "#FF1CF7" : "none"}
                />
              </Button>
            </div>
          </CardHeader>

          <CardBody>
            <p className="text-base mb-3">
              Me he dado cuenta de que mi tiempo no avanza, va hacia atrás, cada
              vez que viajo acaba pasando lo mismo. Así que ya no se que edad
              tengo o debería aparentar, me he perdido en un sueño maravilloso
              del que no quiero despertar, y aquí me quedo, como niña salvaje, y
              feliz.
            </p>
            <Image
              height={200}
              alt="NextUI Fruit Image with Zoom"
              fallbackSrc="https://via.placeholder.com/300x200"
              src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
              className="mb-2 w-full object-cover"
            />
            <Divider className="mt-4" />
          </CardBody>
          <CardFooter>
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              size="md"
            />
            <div className="flex flex-col w-full ml-2">
              <Textarea
                className="rounded-lg"
                radius="full"
                minRows={1}
                placeholder="Escribe algo..."
                endContent={
                  <SendIcon
                    className="opacity-75"
                    width={undefined}
                    height={undefined}
                  />
                }
              />
            </div>
          </CardFooter>
        </Card>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex gap-3 justify-center items-center opacity-75 border-[#27272a] border-[1px] w-full h-14 rounded-lg">
          <span>No hay mas noticias</span>
        </div>
      </section>
    </>
  );
}
