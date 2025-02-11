import { z } from 'zod'
import { UseFormRegister } from 'react-hook-form'

export const formSchema = z.object({
  name: z.string().min(3, 'Nome inválido'),
  age: z
    .string()
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val), {
      message: 'A idade deve ser um número válido',
    })
    .pipe(
      z
        .number()
        .min(18, {
          message: 'É necessário ter no mínimo 18 anos para participar',
        })
    ),
  email: z.string().email('Email inválido'),
  github: z.string().min(3, 'Usuário inválido'),
  linkedin: z.string().min(3, 'Usuário inválido'),
  profession: z.enum(['Frontend', 'Backend']),
  timeProfession: z.enum(['1 ano', '2 anos', 'Mais de 3 anos']),
  bestRepository: z.string().min(3, 'Link inválido'),
  aboutProject: z.string().min(1, 'Campo obrigatório'),
  whyLikePrograming: z.string().min(1, 'Campo obrigatório'),
  dayToDayResponsibilities: z.string().min(1, 'Campo obrigatório'),
  receiveFeedback: z.string().min(1, 'Campo obrigatório'),
  aboutUnion: z.string().min(1, 'Campo obrigatório'),
  whyChooseUnion: z.string().min(1, 'Campo obrigatório'),
  whyPartOfUnion: z.string().min(1, 'Campo obrigatório'),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: 'Os termos devem ser aceito',
  }),
})

export type TFormData = z.infer<typeof formSchema>
export type TUserFormRegister = UseFormRegister<TFormData>
