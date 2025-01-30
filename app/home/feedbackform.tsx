'use client'
import { Button, Input, Textarea } from '@nextui-org/react';
import React from 'react';

const FeedbackForm = () => {
    return (
        <div className='min-w-lg flex flex-col gap-4 py-8'>
            <Input label="Full Name" placeholder="eg. Juan Dela Cruz" />
            <Textarea label="Message" placeholder="Leave us message.." />
            <Button variant='solid' className='bg-violet-500 text-white text-base uppercase'>
                Submit Feedback
            </Button>
        </div>
    );
}

export default FeedbackForm;
