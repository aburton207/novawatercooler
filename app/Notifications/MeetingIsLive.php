<?php

namespace App\Notifications;

use App\Models\Meeting;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Notification;
use NotificationChannels\WebPush\WebPushChannel;
use NotificationChannels\WebPush\WebPushMessage;

class MeetingIsLive extends Notification
{
    use Queueable;

    protected $meeting;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Meeting $meeting)
    {
        $this->meeting = $meeting;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return [WebPushChannel::class];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toWebPush($notifiable, $notification)
    {
        return (new WebPushMessage)
            ->title($this->meeting->title . ' is live.')
            ->badge(url('/images/icon-32.png'))
            ->icon(url('/images/icon-192.png'))
            ->body('You can join the meeting now!')
            ->data([
                'id' => $notification->id,
                'url' => url('/m/' . $this->meeting->getMeta('identifier'))
            ]);
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'title' => $this->meeting->title . ' is live.',
            'body' => 'You can join the meeting now!',
            'action_url' => url('/m/' . $this->meeting->getMeta('identifier')),
            'created' => Carbon::now()->toIso8601String()
        ];
    }
}
