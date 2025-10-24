import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import { ImageWithFallback } from './ImageWithFallback'

export function Hero () {
  return (
    <section className='relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background pt-16 pb-20 md:pt-24 md:pb-28'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <div className='inline-block px-4 py-2 bg-primary/10 rounded-full'>
              <span className='text-sm text-primary'>
                Supporting Carers Across the UK
              </span>
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
              Empowering Carers to Succeed in the UK
            </h1>

            <p className='text-lg text-muted-foreground max-w-xl'>
              Training • Support • Opportunities • Community
            </p>

            <p className='text-base text-muted-foreground max-w-xl'>
              Join a supportive community designed to help carers and support
              workers, especially from migrant backgrounds, build strong careers
              without exploitation.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <Button size='lg' className='group'>
                Get Started
                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
              </Button>
              <Button size='lg' variant='outline'>
                Learn More
              </Button>
            </div>

            <div className='flex items-center gap-8 pt-6'>
              <div>
                <div className='text-3xl font-bold'>500+</div>
                <div className='text-sm text-muted-foreground'>
                  Active Members
                </div>
              </div>
              <div>
                <div className='text-3xl font-bold'>50+</div>
                <div className='text-sm text-muted-foreground'>
                  Success Stories
                </div>
              </div>
              <div>
                <div className='text-3xl font-bold'>100%</div>
                <div className='text-sm text-muted-foreground'>
                  Free Support
                </div>
              </div>
            </div>
          </div>

          <div className='relative'>
            <div className='aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl'>
              <ImageWithFallback
                src='https://images.unsplash.com/photo-1592392821486-71f028a00581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwd29ya2VycyUyMGNvbW11bml0eSUyMGRpdmVyc2V8ZW58MXx8fHwxNzYwODE5Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                alt='Diverse healthcare workers community'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
