from pelican import signals
import time

def timer_start(pelican):
    global start_time
    start_time = time.time()

def timer_stop(pelican):
    duration = time.time() - start_time
    print(f"Site generated in {duration:.2f} seconds")

def register():
    signals.initialized.connect(timer_start)
    signals.finalized.connect(timer_stop) 