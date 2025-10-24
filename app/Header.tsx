import { Menu } from 'lucide-react'
import { Button } from './ui/button'

export function Header () {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-3'>
            <a href='/'>
              <img
                src={
                  'https://res.cloudinary.com/kayode/image/upload/v1761330270/logo_img_recn43.jpg'
                }
                alt='Carers Hub'
                className='h-12 w-auto'
              />
            </a>
          </div>
        </div>

        <nav className='hidden md:flex items-center gap-6'>
          <a
            href='#about'
            className='text-sm hover:text-primary transition-colors'
          >
            About
          </a>
          <a
            href='#services'
            className='text-sm hover:text-primary transition-colors'
          >
            Services
          </a>
          <a
            href='#testimonials'
            className='text-sm hover:text-primary transition-colors'
          >
            Stories
          </a>
          <a
            href='#blog'
            className='text-sm hover:text-primary transition-colors'
          >
            Blog
          </a>
          <a
            href='#contact'
            className='text-sm hover:text-primary transition-colors'
          >
            Contact
          </a>
        </nav>

        <div className='flex items-center gap-4'>
          <Button className='hidden md:inline-flex'>Join the Hub</Button>
          <Button variant='ghost' size='icon' className='md:hidden'>
            <Menu className='h-5 w-5' />
          </Button>
        </div>
      </div>
    </header>
  )
}
