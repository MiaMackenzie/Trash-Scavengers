import styles from '@/styles/QuizTutorial.module'
import Image from 'next/image'

export default function QuizTutorial() {
    return(
        <>
            <div>
                <Image src={'/scrappy.svg'} width={175} height={175} alt='A vector cartoon drawing of a raccoon head.'/>
                <h1>Welcome to the Game!</h1>
            </div>
            <div>
                <h2>Answer questions right:<br/>advance + gain currency!</h2>
                <div>
                    <Image/>
                </div>
            </div>
        </>
    )
}