import { Carousel } from '@mantine/carousel';
import { IconArrowRight } from '@tabler/icons-react';
import { IconArrowLeft } from '@tabler/icons-react';

const Slider = () => {
	return (
		<div className="">
			<Carousel
				maw={320}
				mx="auto"
				height={180}
				nextControlIcon={<IconArrowRight size={16} />}
				previousControlIcon={<IconArrowLeft size={16} />}
				className="bg-red"
				width={300}
			>
				<Carousel.Slide>2</Carousel.Slide>
				<Carousel.Slide>3</Carousel.Slide>

				<img
					src="https://images.unsplash.com/photo-1684670179697-7b6d0213f152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
					alt=""
					srcset=""
				/>
			</Carousel>
		</div>
	);
};

export default Slider;
