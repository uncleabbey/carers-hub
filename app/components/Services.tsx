import { Card } from '../ui/card'
import { FileText, GraduationCap, Globe, Users, Shield } from 'lucide-react'

const services = [
  {
    icon: FileText,
    title: 'CV & Job Application Support',
    description:
      'Get free, professional help with crafting your CV, writing cover letters, and preparing for interviews.'
  },
  {
    icon: GraduationCap,
    title: 'Care Training & Skills Building',
    description:
      'Access quality training programs to enhance your care skills and advance your career in the sector.'
  },
  {
    icon: Globe,
    title: 'Visa & Sponsorship Guidance',
    description:
      'Navigate the complex UK visa and sponsorship process with clear, honest guidance and support.'
  },
  {
    icon: Users,
    title: 'Community Support & Events',
    description:
      'Connect with fellow carers, attend networking events, and build lasting professional relationships.'
  },
  {
    icon: Shield,
    title: 'Rights & Advocacy',
    description:
      'Understand your rights as a carer and get support to ensure fair treatment and working conditions.'
  }
]

export function Services () {
  return (
    <section id='services' className='py-20 md:py-28 bg-secondary/30'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto text-center space-y-4 mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold'>What We Offer</h2>
          <p className='text-lg text-muted-foreground'>
            Comprehensive support to help you succeed at every stage of your
            care career
          </p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className='p-6 space-y-4 hover:shadow-lg transition-all hover:scale-105'
              >
                <div className='w-12 h-12 bg-primary rounded-lg flex items-center justify-center'>
                  <Icon className='w-6 h-6 text-primary-foreground' />
                </div>
                <h3>{service.title}</h3>
                <p className='text-sm text-muted-foreground'>
                  {service.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
