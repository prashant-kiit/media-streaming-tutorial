# media-streaming-tutorial

Excellent question 👌 this is the core of adaptive streaming.

Short answer:

The player (browser video engine / JS player like hls.js or dash.js) decides the resolution.

Not the backend.
Not the CDN.
Not FFmpeg.

🎬 Who Exactly Decides?

In:

HLS → hls.js (or native Safari player)

DASH → dash.js

Smart TVs → Native media engine

Used by platforms like:

Netflix

YouTube

They all rely on client-side adaptive logic.

🧠 On What Basis Does It Decide?

This is called:

📊 Adaptive Bitrate Algorithm (ABR)

The player monitors:

1️⃣ Network Bandwidth (Most Important)

It measures:

segment_size / download_time = throughput

Example:

If 2 MB downloaded in 1 second
→ ~16 Mbps

If 2 MB downloaded in 4 seconds
→ ~4 Mbps

If bandwidth drops → lower resolution
If bandwidth increases → higher resolution

2️⃣ Buffer Level

Player checks:

How many seconds of video are buffered?

If buffer is low:
→ Switch to lower bitrate immediately

If buffer is healthy:
→ Can attempt higher bitrate

3️⃣ Playback Stability

If:

Frequent rebuffering

Dropped frames

Slow decoding

Then resolution may drop.

4️⃣ Device Capability

A 4K stream won’t be chosen on:

Small screen

Weak CPU

Low memory device

🔁 What Actually Happens Internally

Example scenario:

Available renditions:

360p → 800 kbps

720p → 2500 kbps

1080p → 5000 kbps

Network = 3 Mbps

Player logic:

Safe bitrate = ~70% of measured bandwidth
3 Mbps × 0.7 = 2.1 Mbps

So it chooses:

👉 720p (2.5 Mbps may be borderline)
or sometimes 360p depending on algorithm safety margin.

🔥 Important: Server Does NOT Decide

Server just provides:

Master playlist (HLS)
or
MPD manifest (DASH)

Client decides which stream to request.

📈 Why It’s Client-Side

Because only client knows:

Current network speed

Buffer health

Device performance

User interactions

Server cannot see real-time playback conditions.

------------

HTTP progressive download
https://www.youtube.com/watch?v=ZIlflNBqdQI

On Demand and Live Stream Overview
https://www.youtube.com/watch?v=kCAXpAikMVc&t=23s

Video Streaming System Design 
https://www.youtube.com/watch?v=WlMTxHcm4Qs

HLS/DASH for OnDemand Streaming
https://imagekit.io/docs/adaptive-bitrate-streaming
https://github.com/hiteshchoudhary/video-streaming
https://www.youtube.com/watch?v=WpfI9ge5HYE

RTMP (Live) Streaming 
https://www.youtube.com/watch?v=JwZiO5p-NAE
https://www.youtube.com/watch?v=qenAQwLvZfA

Scale RTMP (Live) Streaming 
https://www.youtube.com/watch?v=yKgWAHqmAwk
https://www.youtube.com/watch?v=7AMRfNKwuYo&t=11s

SDKs similar to StreamYard
https://www.agora.io/en/
https://www.youtube.com/watch?v=_40JX-hj3uU
https://www.youtube.com/watch?v=CukZnaU-0r8
https://www.youtube.com/watch?v=WpfI9ge5HYE
