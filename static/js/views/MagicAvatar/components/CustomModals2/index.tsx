import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { FormattedMessage, useIntl } from 'react-intl'
import {
    Flex
} from '@mantine/core'
import {
    Button,
    Modal,
} from '@nextui-org/react'
import { useNotifications } from 'reapop'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useFormik } from 'formik'
import { useCookies } from 'react-cookie';
import jwtDecode, { JwtPayload } from 'jwt-decode'

import { GeneralText, ModalStyled, ModalHeaderStyled, InputStyled, TooltipStyled } from 'components/GlobalStyle'
import { useEditOrBindEmail } from 'hooks/useUserAuth'
import useMiddlewareTranslation from 'hooks/useMiddlewareTranslation'
import { useTokenAuth } from 'hooks/useTokenAuth'
import { StudioContext, jobType } from '../../../../contexts/Opentalker/context'
import PageLoaderStudio from '../../../../components/Loader/PageLoaderStudio'

const ButtonText = styled(Button) <{ bg: string, borderradius: string }>`
border-radius: ${({ borderradius }) => borderradius};
background-image: ${({ bg }) => bg}!important;
padding:3px 8px;!important;
height:42px;
min-width:110px;
:hover {
    cursor: pointer;
  }
:disabled{
  background-image: linear-gradient(180deg, #9596B2 0%, #BCC6CE 54.69%, #CBDBDD 100%)!important;
}
`

type CustomModalProps = {
    show: boolean,
    onClose: () => void,
    onConfirm?: (params?: string) => void,
    jobInfo?: jobType
}


export const ConfirmOrderModal: React.FC<CustomModalProps> = ({ show, onClose, onConfirm, jobInfo }) => {
    const intl = useIntl()
    const { notify } = useNotifications()
    const { content } = useTokenAuth()
    const { onGetTranslation } = useMiddlewareTranslation()

    const {
        isOverlapLoading
        // , setIsOverlapLoading
    } = useContext(StudioContext);

    const closeModalButton = () => {
        onClose();
    }

    const handleConfirmOrderButton = async () => {
        try {
            // notify(`${intl.formatMessage({ id: "remove-video-successfully", defaultMessage: "Remove Video Successfully" })}`, 'success')
            onConfirm(content.token)
        } catch (e: any) {
            notify(onGetTranslation(e.message), 'error')
        }

    }

    return (
        <>
            <ModalStyled
                width="430px"
                preventClose
                closeButton
                open={show} onClose={closeModalButton} >
                <ModalHeaderStyled >
                    <GeneralText size="clamp(1.7rem,2vw,1.875rem)" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", lineHeight: "1", textTransform: "uppercase" }} >
                        <FormattedMessage
                            id="confirm-order"
                            defaultMessage="Confirm Order"
                            values={{
                                br: <br />
                            }}
                        />
                    </GeneralText>
                </ModalHeaderStyled>
                <svg style={{ alignSelf: "center" }} width="29" height="1" viewBox="0 0 29 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="0.5" x2="28.5" y2="0.500002" stroke="#A5A2BA" />
                </svg>
                <Modal.Body >
                    <Flex direction="column" gap="20px" align="center" style={{ width: "100%" }}>
                        <GeneralText size="clamp(1/4rem,2vw,1.5rem)" color="#ffffff" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1.1", textAlign: "center", textAlignLast: "center" }} >
                            <FormattedMessage
                                id="are-you-sure-you-want-to-confirm-this-order-you"
                                defaultMessage="Are you sure you want to confirm this order?{br} You will receive an email notification in your mailbox as soon as the generation process has been completed."
                                values={{
                                    br: <br />
                                }}
                            />
                        </GeneralText>
                        <Flex gap="20px" style={{ width: "100%" }}>
                            <ButtonText onClick={() => { handleConfirmOrderButton() }} type="button" bg="#E5FF00" borderradius='8px' style={{ width: "100%" }} >
                                <GeneralText size="clamp(1rem,2vw,1.1rem)" color="#000000" weight="bold" css={{ fontFamily: "var(--fontFamily1)", lineHeight: 1, textTransform: "uppercase" }} >
                                    {`${intl.formatMessage({ id: "confirm", defaultMessage: "Confirm" })}`}
                                </GeneralText>
                            </ButtonText>
                            <ButtonText onClick={() => { onClose() }} type="button" bg="#E5FF00" borderradius='8px' style={{ width: "100%" }} >
                                <GeneralText size="clamp(1rem,2vw,1.1rem)" color="#000000" weight="bold" css={{ fontFamily: "var(--fontFamily1)", lineHeight: 1, textTransform: "uppercase" }} >
                                    {`${intl.formatMessage({ id: "cancel", defaultMessage: "Cancel" })}`}
                                </GeneralText>
                            </ButtonText>
                        </Flex>
                    </Flex>
                </Modal.Body>
            </ModalStyled>
            {
                isOverlapLoading.isLoading && <PageLoaderStudio>
                    <GeneralText size="clamp(1.3rem,2vw,1.8rem)" color="#FFFFFF" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "" }} >
                        {isOverlapLoading.title.id &&
                            <FormattedMessage
                                {...isOverlapLoading.title}
                                values={{
                                    br: <br />
                                }}
                            />
                        }
                    </GeneralText>
                </PageLoaderStudio>
            }
        </>

    )
};

export const AddEmailModal: React.FC<CustomModalProps> = ({ show, onClose, onConfirm }) => {
    const intl = useIntl()
    const { notify } = useNotifications()
    const { content } = useTokenAuth()
    const { onGetTranslation } = useMiddlewareTranslation()
    const { onEditOrBindEmail: handleEditOrBindEmail } = useEditOrBindEmail()

    const {
        isOverlapLoading,
        setIsOverlapLoading
    } = useContext(StudioContext);

    const closeModalButton = () => {
        onClose();
    }

    const [cookie, setCookie, removeCookie] = useCookies(["_acc"]);

    const formSchema = Yup.object().shape({
        email: Yup.string()
            .email(intl.formatMessage({ id: "please-enter-a-valid-email-address", defaultMessage: "Please enter a valid email address." }))
            .required(intl.formatMessage({ id: "email-is-required", defaultMessage: "Email address is required" }))
            .min(1, intl.formatMessage({ id: "email-is-too-short", defaultMessage: "Email address is too short" }))
            .max(50, intl.formatMessage({ id: "email-address-exceeds-the-allowed-length", defaultMessage: "Email address exceeds the allowed length" })),
    })
    const validationOpt = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, formState: { errors } } = useForm(validationOpt)

    const formik = useFormik({
        initialValues: { email: "" },
        validationSchema: formSchema,
        onSubmit: async (data, { resetForm }) => {
            try {
                setIsOverlapLoading({ isLoading: true, title: { id: "loading", defaultMessage: "Loading..." } })
                const response = await handleEditOrBindEmail(content.token, data.email)
                if (response.error || response.data.error)
                    throw new Error(response.message)
                if (response.data.token) {
                    const decodedJwt = jwtDecode<JwtPayload>(response.data.token)
                    const jwtExpires = new Date(decodedJwt.exp * 1000)
                    setCookie('_acc', JSON.stringify({ ...decodedJwt, token: response.data.token }),
                        {
                            sameSite: true, secure: true,
                            expires: jwtExpires, path: '/'
                        })
                    notify(`${intl.formatMessage({ id: "the-email-has-been-successfully-saved", defaultMessage: "The email has been successfully saved" })}`, 'success')
                    resetForm()
                    onClose()
                    onConfirm(response.data.token)
                    setIsOverlapLoading({ isLoading: false, title: { id: "", defaultMessage: "" } })
                }
                return;

            } catch (error: string | any) {
                notify(onGetTranslation(error.message), 'error')
                setIsOverlapLoading({ isLoading: false, title: { id: "", defaultMessage: "" } })
            }
        }
    })

    return (
        <>
            <ModalStyled
                width="430px"
                preventClose
                closeButton
                open={show} onClose={closeModalButton} >
                <ModalHeaderStyled >
                    <GeneralText size="clamp(1.7rem,2vw,1.875rem)" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", lineHeight: "1", textTransform: "uppercase" }} >
                        <FormattedMessage
                            id="add-email"
                            defaultMessage="Add email"
                            values={{
                                br: <br />
                            }}
                        />
                    </GeneralText>
                </ModalHeaderStyled>
                <svg style={{ alignSelf: "center" }} width="29" height="1" viewBox="0 0 29 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="0.5" x2="28.5" y2="0.500002" stroke="#A5A2BA" />
                </svg>
                <Modal.Body >
                    <Flex direction="column" gap="20px" align="center" style={{ width: "100%" }}>
                        <Flex direction="column" gap="10px" align="center" style={{ width: "100%" }}>
                            <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
                                <Flex direction="column" gap="10px" style={{ width: "100%" }}>
                                    <GeneralText size="clamp(1rem,2vw,1.125rem)" color="#ffffff" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "clamp(0.875rem,2vw,0.9rem)" }} >
                                        <FormattedMessage
                                            id="email"
                                            defaultMessage="Email"
                                            values={{
                                                br: <br />
                                            }}
                                        />
                                    </GeneralText>
                                    <Flex direction="column" style={{ gap: "6px", alignSelf: "center", width: "100%", position: "relative" }}>
                                        <Flex justify="center" direction="column" align="flex-start" style={{ width: "100%" }}>
                                            <InputStyled style={{ width: "100%" }} name="email" type="email" autoCapitalize="off" autoComplete="off" autoCorrect='off' placeholder={intl.formatMessage({ id: "email", defaultMessage: "Email" })} onChange={formik.handleChange} value={formik.values.email} autoFocus />
                                            <TooltipStyled>
                                                <GeneralText size="clamp(0.7rem,2vw,0.8rem)" color="red" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize" }} >
                                                    {formik.errors.email}
                                                </GeneralText>
                                            </TooltipStyled>
                                        </Flex>
                                    </Flex>
                                </Flex>
                                <GeneralText size="clamp(0.725rem,2vw,0.725rem)" color="#ffffff" weight="normal" css={{ fontFamily: "var(--fontFamily1)", lineHeight: 1 }} >
                                    {`${intl.formatMessage({ id: "kindly-provide-your-email", defaultMessage: "Kindly provide your email to receive the generated result or future notifications from us." })}`}
                                </GeneralText>
                                <Flex gap="20px" style={{ width: "100%" }}>
                                    <ButtonText type="submit" bg="#E5FF00" borderradius='8px' style={{ width: "100%" }} >
                                        <GeneralText size="clamp(1rem,2vw,1.1rem)" color="#000000" weight="bold" css={{ fontFamily: "var(--fontFamily1)", lineHeight: 1, textTransform: "uppercase" }} >
                                            {`${intl.formatMessage({ id: "confirm", defaultMessage: "Confirm" })}`}
                                        </GeneralText>
                                    </ButtonText>
                                </Flex>
                            </form>
                        </Flex>
                    </Flex>
                </Modal.Body>
            </ModalStyled>
            {
                isOverlapLoading.isLoading && <PageLoaderStudio>
                    <GeneralText size="clamp(1.3rem,2vw,1.8rem)" color="#FFFFFF" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "" }} >
                        {isOverlapLoading.title.id &&
                            <FormattedMessage
                                {...isOverlapLoading.title}
                                values={{
                                    br: <br />
                                }}
                            />
                        }
                    </GeneralText>
                </PageLoaderStudio>
            }
        </>

    )
}


