import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Card } from '../ui/card'
import { CheckCircle2 } from 'lucide-react'
import { ImageWithFallback } from './ImageWithFallback'
const benefits = [
  'First access to job opportunities',
  'Free training and workshop invitations',
  'Monthly newsletter with industry updates',
  'Direct connection to sponsorship opportunities',
  'Community support and networking'
]

export function JoinCommunity () {
  return (
    <section className='py-20 md:py-28 bg-primary text-primary-foreground'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
          <div className='space-y-6'>
            <h2 className='text-3xl md:text-4xl font-bold'>
              Join Our Community
            </h2>
            <p className='text-lg text-primary-foreground/80'>
              Be part of a growing network of carers supporting each other to
              succeed in the UK care sector.
            </p>

            <div className='space-y-3'>
              {benefits.map((benefit, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <CheckCircle2 className='w-5 h-5 flex-shrink-0 mt-0.5' />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <Card className='p-6 bg-background text-foreground'>
              <form className='space-y-4'>
                <div>
                  <Input
                    type='text'
                    placeholder='Your Name'
                    className='bg-input-background'
                  />
                </div>
                <div>
                  <Input
                    type='email'
                    placeholder='Your Email'
                    className='bg-input-background'
                  />
                </div>
                <div>
                  <Input
                    type='tel'
                    placeholder='Phone Number (Optional)'
                    className='bg-input-background'
                  />
                </div>
                <Button type='submit' className='w-full' size='lg'>
                  Join Now - It's Free!
                </Button>
                <p className='text-xs text-muted-foreground text-center'>
                  By joining, you agree to receive updates and resources from
                  Carers Hub.
                </p>
              </form>
            </Card>
          </div>

          <div className='relative'>
            <div className='aspect-square rounded-2xl overflow-hidden shadow-2xl'>
              <ImageWithFallback
                src='https://images.unsplash.com/photo-1742535036235-0fc7a17d651f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlJTIwd29ya2VyJTIwc21pbGluZyUyMHN1cHBvcnR8ZW58MXx8fHwxNzYwODE5Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                alt='Smiling care worker'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
