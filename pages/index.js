import Head from 'next/head'
import Link from 'next/link'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>PlayBook</title>
        <meta name="PlayBook is my first Next app" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <div className='lg:ml-80 lg:my-8  lg:mr-72 md:ml-36 md:mr-36 md:my-4 sm:ml-24 sm:my-4 sm:mr-24 px-12'>
      <h1 className='text-yellow-700 text-4xl font-bold flex justify-center items-center my-12'>Coffee</h1>

      <h1 className='text-xl font-bold  md:mr-36 md:my-4 sm:my-4 sm:mr-24'>iCoffee Playbook</h1>

      <p className='mt-4'>This Playbook details a set of rules and guidelines that you should follow during your time working with Coffee. </p>

      <h1 className='text-xl font-bold mt-4'>On Code Editors</h1>

      <p className='mt-4'>Depending on the language that you have chosen to work with, there are a number of code editors to choose from. We recommend using <span className='font-bold'> VS Code </span> <Link href="https://code.visualstudio.com" >https://code.visualstudio.com</Link> for working on your projects. You can install extensions to code assist in your projects.</p>

      <p className='mt-4'>Following are a few extensions we recommend for your project:</p>
        <ul className='list-disc ml-12'>
          <li>Git Graph</li>
          <li>IntelliCode</li>
          <li>Excel Winer</li>
        </ul>
      
        <h1 className='text-xl font-bold mt-4'>On Repositories and Version Control</h1>
        
        <p className='mt-4'>Maintain a git repository of every project you work on henceforth. You will need to install Git For your system(<Link href="https://git-scm.com" >https://git-scm.com</Link>) to get started.</p>
        <ul className='list-disc ml-12'>
          <li>Initialize a repository in your project folder. </li>
          <li>Add files to a local git repository for version control.</li>
        </ul>

        <p className='mt-4'>If you want to learn more about version control, you can check out this page: <Link href="https://docs.github.com/en/get-started/using-git/about-git" >https://docs.github.com/en/get-started/using-git/about-git</Link></p>

        <p className='mt-4'>Apart from having a local git repository, you can leverage cloud providers like GitHub, GitLab or BitBucket to maintain your repos in the cloud. We recommend signing up for GitHub for Education and availing perks if you are a student.</p>

        <p className='mt-4'>Additionally, you can share collaborator access to the following GitHub ID for every GitHub project you setup.</p>

        <p>Github ID: <span className='font-bold'>TheCoffee / GauravG8</span></p>

        <h1 className='text-xl font-bold mt-4'>On Programming and Standards</h1>
        <p className='mt-4'>Now that you have your code editor and version control sorted, you can get started on your project. Make sure to follow the naming conventions in your respective languages (CamelCase and snake_case wherever applicable).</p>
        <p className='mt-4'>Maintain a clean folder structure and tree grouping assets in sub-folders based on type and components in sub-folders based on module. Use self-explanatory names for your variables, functions and class names and avoid using generic expressions.</p>

        <h1 className='text-xl font-bold mt-4'>On Documentation and Notes</h1>
        <p className='mt-4'>Getting your code to work is the first step. The next crucial step is to maintain documentation for your code. This will help not only other developers who will work with your code, but you as well in the long run. </p>
        <p className='mt-4'>Add comments to explain logic and variable return types esp. in implicitly typed languages like JavaScript. You can use Google docs to maintain.</p>

        <h1 className='text-xl font-bold mt-4'>On Errors</h1>
        <p className='mt-4'>Every so often you will find yourself with an error in your code. Make it a habit to read and understand the error log. Look for the line number and file name mentioned in the log pointing to the source of the error. </p>
        <p className='mt-4'>In moments where this may not be the case, get the error message and <span className='font-bold'>Google it! </span> Most of the time, the error you have faced has been faced by someone else, so you will find posts on it. </p>
        <p className='mt-4'>You can also check <span className='font-bold'>Stack Overflow </span>for posts on your query/error. Finally, you have the option to reach out to us and have a discussion for debugging. </p>

        <h1 className='text-xl font-bold mt-4'>On Queries</h1>
        <p className='mt-4'>You can ask your queries reg. work or task given over mail or call. If you have an issue in the code and you need us to intervene and help you out, please reach out to us and schedule the time in the calendar <span className='font-bold'>(if more than 20 minutes)</span> in advance and confirm the availability. </p>
        <p className='mt-4'>Always keep us informed about the approach you have taken to solve the issue and so that we can try out other options. Make sure you have tried more than a couple of solutions before you reach out to us. This will help you to understand the error or bugs deeply by yourself./</p>

        <h1 className='text-xl font-bold mt-4'>Maintaining the Worklog</h1>
        <p className='mt-4'>A worklog has been shared with you as part of your internship. Tasks have been added to the <span className='font-bold'>Task List</span> sheet for you to work on. Use that sheet to update your status and lessons learned as well as any additional tasks assigned to you.</p>
        <p className='mt-4'>Make sure to update daily tasks in the weekly worklog covering the time you have worked every day.</p>

        <h1 className='text-xl font-bold mt-4'>Key Things to keep in mind</h1>

        <ul className='list-disc ml-12'>
          <li>Be Curious. Question everything.</li>
          <li>Be ready to adapt and switch projects.</li>
          <li>Be Persistent.</li>
          <li>Learn at least one new thing everyday.</li>
          <li>Be a team player. Collaborate</li>
          <li>Go the extra mile.</li>
        </ul>

        <p>And most importantly, <span className='font-bold'>Have fun.</span></p>

        <h1 className='text-yellow-700 text-xl font-bold my-12'>Welcome to Coffee!</h1>
        
      </div>

      
    </>
  )
}