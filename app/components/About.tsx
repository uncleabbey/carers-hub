import { Heart, Target, Users } from 'lucide-react'
import { Card } from '../ui/card'

export function About () {
  return (
    <section id='about' className='py-20 md:py-28'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto text-center space-y-4 mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold'>About Carers Hub</h2>
          <p className='text-lg text-muted-foreground'>
            We are a supportive community and resource centre created to empower
            carers and support workers, especially those from migrant
            backgrounds, to thrive in the UK care sector.
          </p>
          <p className='text-base text-muted-foreground'>
            Carers Hub offers guidance, training, and opportunities to help
            people build strong careers in care, understand their rights, and
            connect with trusted resources. We're here to share real
            experiences, educate others, and open doors to better job and
            sponsorship opportunities — without exploitation.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          <Card className='p-6 space-y-4 text-center hover:shadow-lg transition-shadow'>
            <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto'>
              <Heart className='w-6 h-6 text-primary' />
            </div>
            <h3>Our Mission</h3>
            <p className='text-sm text-muted-foreground'>
              To provide comprehensive support and resources that empower carers
              to build successful, sustainable careers in the UK care sector.
            </p>
          </Card>

          <Card className='p-6 space-y-4 text-center hover:shadow-lg transition-shadow'>
            <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto'>
              <Target className='w-6 h-6 text-primary' />
            </div>
            <h3>Our Vision</h3>
            <p className='text-sm text-muted-foreground'>
              A future where every carer has access to fair opportunities,
              proper training, and a supportive community that champions their
              success.
            </p>
          </Card>

          <Card className='p-6 space-y-4 text-center hover:shadow-lg transition-shadow'>
            <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto'>
              <Users className='w-6 h-6 text-primary' />
            </div>
            <h3>Our Community</h3>
            <p className='text-sm text-muted-foreground'>
              A diverse network of carers supporting each other, sharing
              experiences, and growing together in their professional journeys.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
